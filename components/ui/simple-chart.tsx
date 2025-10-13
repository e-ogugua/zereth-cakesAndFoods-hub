"use client"

import * as React from "react"
import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  Pie,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadialBar,
  ResponsiveContainer,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip as RechartsTooltip,
} from "recharts"

interface ChartTooltipProps {
  active?: boolean
  payload?: Array<{
    value: string | number | Date
    name: string
    dataKey: string
    color: string
    payload: unknown
  }>
  label?: string
  className?: string
}

export function ChartTooltip({
  active,
  payload = [],
  label,
  className,
  ...props
}: ChartTooltipProps) {
  if (!active || !payload?.length) return null

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
      {...props}
    >
      {label && <div className="font-medium">{label}</div>}
      <div className="grid gap-1.5">
        {payload.map((item, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-muted-foreground">{item.name}</span>
            <span className="font-mono font-medium tabular-nums">
              {String(item.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

interface ChartLegendProps {
  payload?: Array<{
    value: string
    type?: string
    id: string
    color?: string
    [key: string]: unknown
  }>
  className?: string
}

export function ChartLegend({
  payload = [],
  className,
  ...props
}: ChartLegendProps) {
  if (!payload?.length) return null

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4",
        className
      )}
      {...props}
    >
      {payload.map((entry, index) => (
        <div key={`legend-${index}`} className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm">{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

// Re-export all the chart components
export {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  Pie,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadialBar,
  ResponsiveContainer,
  Scatter,
  RechartsTooltip as Tooltip,
  XAxis,
  YAxis,
  ZAxis,
}

function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}
