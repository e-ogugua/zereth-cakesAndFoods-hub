// Payment configuration and utilities for multi-currency support

export interface PaymentProvider {
  id: string
  name: string
  currencies: string[]
  countries: string[]
  type: "card" | "wallet" | "bank" | "cash"
}

export const SUPPORTED_CURRENCIES = {
  USD: { symbol: "$", name: "US Dollar", flag: "🇺🇸" },
  GBP: { symbol: "£", name: "British Pound", flag: "🇬🇧" },
  NGN: { symbol: "₦", name: "Nigerian Naira", flag: "🇳🇬" },
} as const

export const PAYMENT_PROVIDERS: PaymentProvider[] = [
  {
    id: "stripe",
    name: "Stripe",
    currencies: ["USD", "GBP"],
    countries: ["US", "GB", "CA", "AU"],
    type: "card",
  },
  {
    id: "paystack",
    name: "Paystack",
    currencies: ["NGN"],
    countries: ["NG"],
    type: "card",
  },
  {
    id: "flutterwave",
    name: "Flutterwave",
    currencies: ["NGN"],
    countries: ["NG"],
    type: "card",
  },
  {
    id: "pay-on-delivery",
    name: "Pay on Delivery",
    currencies: ["USD", "GBP", "NGN"],
    countries: ["US", "GB", "NG"],
    type: "cash",
  },
]

export const CURRENCY_RATES = {
  // Base rates (USD = 1)
  USD: 1,
  GBP: 0.79,
  NGN: 1650,
}

export function convertCurrency(amount: number, from: string, to: string): number {
  if (from === to) return amount

  // Convert to USD first, then to target currency
  const usdAmount = amount / CURRENCY_RATES[from as keyof typeof CURRENCY_RATES]
  const convertedAmount = usdAmount * CURRENCY_RATES[to as keyof typeof CURRENCY_RATES]

  return Math.round(convertedAmount * 100) / 100
}

export function formatCurrency(amount: number, currency: string): string {
  const currencyInfo = SUPPORTED_CURRENCIES[currency as keyof typeof SUPPORTED_CURRENCIES]
  if (!currencyInfo) return `${amount}`

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: currency === "NGN" ? 0 : 2,
  }).format(amount)
}

export function detectCurrencyByCountry(countryCode: string): string {
  switch (countryCode.toUpperCase()) {
    case "NG":
      return "NGN"
    case "GB":
      return "GBP"
    case "US":
    case "CA":
    case "AU":
    default:
      return "USD"
  }
}

export function getAvailablePaymentMethods(currency: string, country: string): PaymentProvider[] {
  return PAYMENT_PROVIDERS.filter(
    (provider) => provider.currencies.includes(currency) && provider.countries.includes(country),
  )
}
