import { Router } from "express"
import { getHealth, getInsights, analyzeData } from "../controllers/insightsController"

const router = Router()

// Health check endpoint
router.get("/health", getHealth)

// Get AI-powered sales insights
router.get("/insights", getInsights)

// Analyze sales data
router.post("/analyze", analyzeData)

export default router
