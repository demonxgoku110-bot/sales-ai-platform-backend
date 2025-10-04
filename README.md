# Sales AI Platform - Backend API

Backend API server for the Sales AI Platform built with Node.js, Express, and TypeScript.

## Features

- RESTful API endpoints
- TypeScript for type safety
- CORS enabled for frontend integration
- Health check endpoint
- AI-powered sales insights
- Sales data analysis

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the backend directory:
\`\`\`bash
cd backend
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create environment file:
\`\`\`bash
cp .env.example .env
\`\`\`

4. Update `.env` with your configuration

### Development

Run the development server with hot reload:
\`\`\`bash
npm run dev
\`\`\`

The API will be available at `http://localhost:3001`

### Production

Build the TypeScript code:
\`\`\`bash
npm run build
\`\`\`

Start the production server:
\`\`\`bash
npm start
\`\`\`

## API Endpoints

### Health Check
\`\`\`
GET /api/health
\`\`\`
Returns server health status and uptime.

### Get Insights
\`\`\`
GET /api/insights
\`\`\`
Returns AI-powered sales insights and recommendations.

### Analyze Data
\`\`\`
POST /api/analyze
Content-Type: application/json

{
  "data": [...],
  "timeframe": "last_30_days",
  "metrics": ["conversion_rate", "revenue"]
}
\`\`\`
Analyzes sales data and returns insights, trends, and predictions.

## Project Structure

\`\`\`
backend/
├── src/
│   ├── index.ts              # Main server file
│   ├── routes/
│   │   └── api.ts            # API routes
│   ├── controllers/
│   │   └── insightsController.ts  # Business logic
│   └── types/
│       └── index.ts          # TypeScript types
├── package.json
├── tsconfig.json
└── .env.example
\`\`\`

## Environment Variables

- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS (default: http://localhost:3000)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Security**: Helmet, CORS
- **Logging**: Morgan
