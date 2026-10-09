# BizFit — Business Digitization & Technology Fit Assessment

An interactive enterprise web application designed for small businesses and distributors to evaluate operational workflows and determine technology fit.

## Overview
- **3 Operational Tracks**:
  - 📈 **Marketing Marks**: Customer acquisition, WhatsApp enquiry logging, follow-up cadence, and market expansion beyond word-of-mouth (features the **N Stone Chemicals** Case Study).
  - 📦 **Order Management**: Quotation-to-cash, real-time godown stock checks, handwritten paper challans, and customer credit ledger (Khata) recovery.
  - 👥 **Employee Management**: Selfie/QR attendance, unverified late arrivals, cash advance disputes, and automated payroll calculations.
- **Interactive Multi-Step Guided Diagnostic**: Non-spreadsheet step-by-step card questionnaire with real-time scoring.
- **Opportunity Detection Engine**: Standardised scoring rubric across Frequency (F), Time & Effort (T), Business Impact (B), and Digitalisation Gap (D):
  $$\text{Opportunity Score} = \frac{F + T + B + D}{4}$$
- **Technology Fit Engine**: Weighted algorithm calculating platform suitability (e.g., IndiaMART, TradeIndia, Google Ads or Vyapar, PagarBook).
- **3D Three.js Visuals**: Interactive 3D workflow node constellation and orbital geometry reacting to mouse movement.
- **Executive Discovery Report**: Workflow evolution (Today vs Proposed), Cost & Value analysis, 30-Day Pilot Evaluation Plan, and an Interactive Break-even ROI Calculator.

## Tech Stack
- HTML5 / CSS3 (Enterprise Design System)
- JavaScript (ES Modules)
- Three.js (3D WebGL Background)

## Running Locally
Start a local web server in the project directory:
```bash
python -m http.server 5173
```
Then open `http://localhost:5173` in your browser.
