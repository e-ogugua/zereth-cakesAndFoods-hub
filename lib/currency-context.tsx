"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Currency = 'USD' | 'EUR' | 'GBP' | 'NGN'

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  formatPrice: (price: number) => string
  getConversionRate: (currency: Currency) => number
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

const conversionRates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  NGN: 1600, // Nigerian Naira
}

interface CurrencyProviderProps {
  children: ReactNode
}

export function CurrencyProvider({ children }: CurrencyProviderProps) {
  const [currency, setCurrencyState] = useState<Currency>('USD')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load saved currency from localStorage
    const savedCurrency = localStorage.getItem('selectedCurrency') as Currency
    if (savedCurrency && Object.keys(conversionRates).includes(savedCurrency)) {
      setCurrencyState(savedCurrency)
    }
    setIsLoaded(true)
  }, [])

  const handleSetCurrency = (newCurrency: Currency) => {
    console.log('CurrencyContext: Setting currency from', currency, 'to', newCurrency)
    setCurrencyState(newCurrency)
    localStorage.setItem('selectedCurrency', newCurrency)
    console.log('CurrencyContext: Currency set to', newCurrency)
  }

  const formatPrice = (price: number): string => {
    const convertedPrice = price * conversionRates[currency]
    const currencySymbols: Record<Currency, string> = {
      USD: '$',
      EUR: '€',
      GBP: '£',
      NGN: '₦',
    }

    return `${currencySymbols[currency]}${convertedPrice.toFixed(2)}`
  }

  const getConversionRate = (targetCurrency: Currency): number => {
    return conversionRates[targetCurrency]
  }

  const value: CurrencyContextType = {
    currency,
    setCurrency: handleSetCurrency,
    formatPrice,
    getConversionRate,
  }

  // Only render children after initial load to prevent hydration issues
  if (!isLoaded) {
    return (
      <CurrencyContext.Provider value={value}>
        <div>Loading...</div>
      </CurrencyContext.Provider>
    )
  }

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}
