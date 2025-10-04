export interface SalesInsight {
  id: string
  title: string
  description: string
  category: "revenue" | "conversion" | "retention" | "product" | "other"
  impact: "high" | "medium" | "low"
  confidence: number
  timestamp: string
}

export interface AnalyzeRequest {
  data: any[]
  timeframe?: string
  metrics?: string[]
}

export interface AnalyzeResponse {
  success: boolean
  summary: {
    totalRecords: number
    timeframe: string
    analyzedAt: string
  }
  insights: Array<{
    metric: string
    value: number
    trend: "up" | "down" | "stable"
    change: number
    recommendation: string
  }>
  predictions: {
    nextMonth: {
      revenue: number
      deals: number
      confidence: number
    }
    nextQuarter: {
      revenue: number
      deals: number
      confidence: number
    }
  }
}
