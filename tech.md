# 🧬 ChurnDNA: Digital Twins for Customer Retention

## 🌐 Theme
**Moonshot Avskar 2025 – Powering the Do-It-Yourself Telco**

---

## 🎯 Objective

To build a **frontend-only**, fully animated simulation website that showcases how Telcos can use **AI + Digital Twins** to predict and prevent customer churn. All data used is **dummy/simulated**, with a high emphasis on **design, storytelling, and interactivity**.

---

## 🔧 Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + ShadCN for components
- **Animation:**
  - `Lottie` for JSON-based animations
  - `Framer Motion` for page transitions and UI reveals
  - `SVG` + `Canvas` for dynamic visuals (e.g., DNA helix)
- **Charts & Graphs:** Recharts (bar, line, donut), or D3.js
- **3D Support:** `React Three Fiber` for optional 3D elements (e.g., globe, twin model)
- **Data Source:** JSON files in `/public/data/` folder

---

## 🧠 AI Simulation Plan (All Dummy Data)

Simulated AI behavior mimics:
- Churn risk scoring
- Digital twin profiling
- Personalized retention recommendations

### Example `customers.json`:
```json
[
  {
    "id": "C108",
    "name": "Amit Verma",
    "churnRisk": 92,
    "location": "Delhi",
    "signals": {
      "dataDrop": true,
      "lowUsage": true,
      "billingIssues": false
    },
    "twinProfile": {
      "type": "Heavy User",
      "preferences": ["Streaming", "Night-time usage"],
      "history": {
        "tenure": "14 months",
        "supportCalls": 3
      },
      "recommendation": "Offer 50% streaming pack discount"
    }
  }
]

### Directory:

src/app/
├── page.tsx              # Home
├── churn/
│   ├── page.tsx          # ChurnDNA Engine Main
│   ├── signals.tsx       # Sub-page: Churn Signals
│   ├── agentic.tsx       # Sub-page: AI Agentic Analysis
│   ├── genai.tsx         # Sub-page: Generative AI Rules
│   ├── twins.tsx         # Sub-page: Digital Twins
├── dashboard/
│   └── page.tsx          # Dashboard simulation
├── builder/
│   └── page.tsx          # DIY Telco builder
├── solution/
│   └── page.tsx          # Final Pitch page
public/
├── data/
│   └── customers.json    # Churn data simulation
│   └── dashboard.json    # Chart values
│   └── aiAgents.json     # AI personas
│   └── actions.json      # Retention suggestions
├── animations/
│   └── dna-loader.json   # Lottie assets

