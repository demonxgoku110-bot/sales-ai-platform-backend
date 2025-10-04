import type { Request, Response } from "express"
import type { SalesInsight, AnalyzeRequest, AnalyzeResponse } from "../types"

// Health check
export const getHealth = (req: Request, res: Response) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
}

// Get AI-powered sales insights
export const getInsights = (req: Request, res: Response) => {
  // Mock data - replace with actual AI/ML logic
  const insights: SalesInsight[] = [
    {
      id: "1",
      title: "Revenue Growth Opportunity",
      description: "Q4 shows 23% increase in enterprise deals. Focus on mid-market expansion.",
      category: "revenue",
      impact: "high",
      confidence: 0.87,
      timestamp: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Lead Conversion Optimization",
      description: "Email campaigns on Tuesdays have 34% higher open rates.",
      category: "conversion",
      impact: "medium",
      confidence: 0.92,
      timestamp: new Date().toISOString(),
    },
    {
      id: "3",
      title: "Customer Retention Alert",
      description: "5 high-value accounts show decreased engagement. Immediate action recommended.",
      category: "retention",
      impact: "high",
      confidence: 0.78,
      timestamp: new Date().toISOString(),
    },
    {
      id: "4",
      title: "Product Interest Trend",
      description: "Enterprise tier features driving 45% of demo requests.",
      category: "product",
      impact: "medium",
      confidence: 0.85,
      timestamp: new Date().toISOString(),
    },
  ]

  res.json({
    success: true,
    data: insights,
    count: insights.length,
  })
}

// Analyze sales data
export const analyzeData = (req: Request, res: Response) => {
  const { data, timeframe, metrics }: AnalyzeRequest = req.body

  // Validation
  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      success: false,
      error: "Invalid data format. Expected an array of sales records.",
    })
  }

  // Mock analysis - replace with actual AI/ML processing
  const analysis: AnalyzeResponse = {
    success: true,
    summary: {
      totalRecords: data.length,
      timeframe: timeframe || "last_30_days",
      analyzedAt: new Date().toISOString(),
    },
    insights: [
      {
        metric: "conversion_rate",
        value: 24.5,
        trend: "up",
        change: 3.2,
        recommendation: "Conversion rate is trending upward. Continue current strategies.",
      },
      {
        metric: "average_deal_size",
        value: 12500,
        trend: "up",
        change: 8.7,
        recommendation: "Deal sizes increasing. Consider upselling premium features.",
      },
      {
        metric: "sales_cycle_length",
        value: 45,
        trend: "down",
        change: -5.3,
        recommendation: "Sales cycle shortened by 5 days. Excellent progress.",
      },
    ],
    predictions: {
      nextMonth: {
        revenue: 245000,
        deals: 18,
        confidence: 0.83,
      },
      nextQuarter: {
        revenue: 780000,
        deals: 56,
        confidence: 0.71,
      },
    },
  }

  res.json(analysis)
}
