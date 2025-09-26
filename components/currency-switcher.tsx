"use client"

import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useCurrency, Currency } from '@/lib/currency-context'

const currencyLabels: Record<Currency, string> = {
  USD: 'USD ($)',
  EUR: 'EUR (€)',
  GBP: 'GBP (£)',
  NGN: 'NGN (₦)',
}

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('currency-dropdown')
      const button = document.querySelector('[data-currency-button]')

      if (dropdown && button) {
        const target = event.target as Element
        if (!dropdown.contains(target) && !button.contains(target)) {
          setIsOpen(false)
        }
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen])

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center gap-1 px-2 py-1.5 text-xs font-medium bg-white border border-gray-200 rounded-md shadow-sm hover:border-red-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        data-currency-button
      >
        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center">
          <Globe className="h-2 w-2 text-white" />
        </div>
        <span className="text-gray-700 font-semibold hidden sm:inline">{currency}</span>
        <svg className="w-2.5 h-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          id="currency-dropdown"
          className="absolute right-0 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50"
        >
          <div className="py-1">
            <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Select Currency
            </div>
            <div className="border-t border-gray-100 my-0.5"></div>
            {(Object.keys(currencyLabels) as Currency[]).map((curr) => (
              <button
                key={curr}
                className={`w-full px-2 py-1.5 text-left text-sm hover:bg-red-50 hover:text-red-600 transition-colors duration-150 flex items-center gap-2 ${currency === curr ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'}`}
                onClick={() => handleCurrencyChange(curr)}
                type="button"
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${currency === curr ? 'bg-red-100' : 'bg-gray-100'}`}>
                  <span className="text-xs font-bold">
                    {curr === 'USD' ? '$' : curr === 'EUR' ? '€' : curr === 'GBP' ? '£' : '₦'}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-sm">{curr}</div>
                  <div className="text-xs text-gray-500">{currencyLabels[curr]}</div>
                </div>
                {currency === curr && (
                  <svg className="w-2.5 h-2.5 text-red-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
