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

  console.log('Current currency:', currency) // Debug log

  const handleCurrencyChange = (newCurrency: Currency) => {
    console.log('Switching to currency:', newCurrency) // Debug log
    setCurrency(newCurrency)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          {currencyLabels[currency]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(Object.keys(currencyLabels) as Currency[]).map((curr) => (
          <DropdownMenuItem
            key={curr}
            onClick={() => handleCurrencyChange(curr)}
            className={currency === curr ? 'bg-accent' : ''}
          >
            {currencyLabels[curr]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
