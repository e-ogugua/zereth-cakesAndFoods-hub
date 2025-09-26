"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Currency = 'USD' | 'EUR' | 'GBP' | 'NGN'

export interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  formatPrice: (price: number) => string
  getConversionRate: (targetCurrency: Currency) => number
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

const currencyLabels: Record<Currency, string> = {
  USD: 'USD ($)',
  EUR: 'EUR (€)',
  GBP: 'GBP (£)',
  NGN: 'NGN (₦)',
}

const conversionRates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  NGN: 1600,
}

interface CurrencyProviderProps {
  children: ReactNode
}

export function CurrencyProvider({ children }: CurrencyProviderProps) {
  const [currency, setCurrencyState] = useState<Currency>('USD')

  useEffect(() => {
    // Load currency from localStorage on mount
    const savedCurrency = localStorage.getItem('currency') as Currency
    if (savedCurrency && Object.keys(currencyLabels).includes(savedCurrency)) {
      setCurrencyState(savedCurrency)
    }
  }, [])

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency)
    localStorage.setItem('currency', newCurrency)
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
    setCurrency,
    formatPrice,
    getConversionRate,
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
