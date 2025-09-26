"use client"

import { useCurrency, type Currency } from '@/lib/currency-context'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

const currencyLabels: Record<Currency, string> = {
  USD: 'USD ($)',
  EUR: 'EUR (€)',
  GBP: 'GBP (£)',
  NGN: 'NGN (₦)',
}

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency()

  console.log('CurrencySwitcher rendered with currency:', currency)

  const handleCurrencyChange = (newCurrency: Currency) => {
    console.log('Currency change clicked:', newCurrency)
    setCurrency(newCurrency)
    console.log('Currency should be updated to:', newCurrency)
  }

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:border-red-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        onClick={() => {
          console.log('Currency button clicked')
          // Toggle dropdown visibility
          const dropdown = document.getElementById('currency-dropdown')
          if (dropdown) {
            const isVisible = dropdown.style.display === 'block'
            dropdown.style.display = isVisible ? 'none' : 'block'
            dropdown.style.opacity = isVisible ? '0' : '1'
            dropdown.style.transform = isVisible ? 'translateY(-10px)' : 'translateY(0)'
          }
        }}
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center">
          <Globe className="h-3 w-3 text-white" />
        </div>
        <span className="text-gray-700 font-semibold">{currencyLabels[currency]}</span>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        id="currency-dropdown"
        className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-200 transform opacity-0 translate-y-2 pointer-events-none"
        style={{ display: 'none' }}
      >
        <div className="py-2">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Select Currency
          </div>
          <div className="border-t border-gray-100 my-1"></div>
          {(Object.keys(currencyLabels) as Currency[]).map((curr, index) => (
            <button
              key={curr}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-red-50 hover:text-red-600 transition-colors duration-150 flex items-center gap-3 ${currency === curr ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'}`}
              onClick={() => handleCurrencyChange(curr)}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currency === curr ? 'bg-red-100' : 'bg-gray-100'}`}>
                <span className="text-xs font-bold">
                  {curr === 'USD' ? '$' : curr === 'EUR' ? '€' : curr === 'GBP' ? '£' : '₦'}
                </span>
              </div>
              <div>
                <div className="font-medium">{curr}</div>
                <div className="text-xs text-gray-500">{currencyLabels[curr]}</div>
              </div>
              {currency === curr && (
                <svg className="w-4 h-4 text-red-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
