"use client"

import * as React from "react"
import {
  Area,
  AreaChart as RechartsAreaChart,
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
  RadialBar,
  RadialBarChart as RechartsRadialBarChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart as RechartsScatterChart,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts"

import { cn } from "@/lib/utils"

// Simplified chart component without the complex type issues
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

// Re-export all the chart components with proper types
export {
  Area,
  RechartsAreaChart as AreaChart,
  Bar,
  RechartsBarChart as BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  RechartsLineChart as LineChart,
  Pie,
  RechartsPieChart as PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RechartsRadarChart as RadarChart,
  RadialBar,
  RechartsRadialBarChart as RadialBarChart,
  ResponsiveContainer,
  Scatter,
  RechartsScatterChart as ScatterChart,
  RechartsTooltip as Tooltip,
  XAxis,
  YAxis,
  ZAxis,
}
