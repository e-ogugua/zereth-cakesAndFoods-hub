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
    <div className="relative">
      <button
        className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
        onClick={() => {
          console.log('Currency button clicked')
          // Toggle dropdown visibility
          const dropdown = document.getElementById('currency-dropdown')
          if (dropdown) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'
          }
        }}
      >
        <Globe className="h-4 w-4" />
        {currencyLabels[currency]} - Click me!
      </button>
      
      <div
        id="currency-dropdown"
        className="absolute right-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50 hidden"
      >
        {(Object.keys(currencyLabels) as Currency[]).map((curr) => (
          <div
            key={curr}
            className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
            onClick={() => handleCurrencyChange(curr)}
          >
            {currencyLabels[curr]}
          </div>
        ))}
      </div>
    </div>
  )
}
