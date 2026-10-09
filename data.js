// Assessment Data and Knowledge Engine for BizFit
// Based on Design Thinking Research & N Stone Chemicals Case Study

export const MODULES = {
  marketing: {
    id: "marketing",
    name: "Marketing & Customer Acquisition",
    shortName: "Marketing Marks",
    tagline: "Evaluate lead generation, enquiry channels, follow-ups, and reach beyond existing networks",
    icon: "📈",
    accentColor: "#3b82f6",
    gradient: "linear-gradient(135deg, #2563eb, #38bdf8)",
    caseStudyProfile: {
      companyName: "N Stone Chemicals",
      industry: "Construction materials retailer and distributor",
      teamSize: "7 employees · ~150 customer contacts",
      currentChannels: "Physical store, WhatsApp Business, Website, Phone calls",
      ownerPriority: "Attract new business customers consistently (Contractors, builders, architects, tile installers)"
    },
    questions: [
      {
        id: 1,
        question: "Where do most of your new customers or enquiries come from?",
        hint: "Identify your current acquisition channels and typical customer types.",
        ownerAnswer: "Most of our customers come through the store and people we already have connections with in the construction industry. We also get enquiries through WhatsApp Business, our website and phone calls. Our customers include contractors, builders, architects, tile installers and individual customers.",
        quickTags: ["Store walk-in", "WhatsApp Business", "Referrals/Word of mouth", "Website", "Phone calls"],
        metrics: { f: 5, t: 3, b: 5, d: 4 },
        problemKey: "inconsistent_acquisition"
      },
      {
        id: 2,
        question: "What information do you record when you receive a new customer enquiry?",
        hint: "Specify contact details, required materials, quantities, or technical specs.",
        ownerAnswer: "We usually take the customer's name and contact number and note what product they are looking for. Depending on the enquiry, we may also note the quantity, price, delivery requirement and any specific product requirement. We have around 150 customer contacts.",
        quickTags: ["Name & Phone", "Product requested", "Estimated quantity", "Target budget/price", "Delivery location"],
        metrics: { f: 4, t: 3, b: 4, d: 4 },
        problemKey: "acquisition_tracking"
      },
      {
        id: 3,
        question: "Where is this customer or enquiry information recorded?",
        hint: "Which medium stores initial details (e.g., notebook, chat, spreadsheet, CRM)?",
        ownerAnswer: "If someone messages us, the conversation is on WhatsApp. Phone enquiries are handled through calls, and customers who come to the shop are handled there. Website enquiries come through the website. Our customer contacts are maintained from these interactions.",
        quickTags: ["WhatsApp chat history", "Physical registers/notepad", "Phone call logs", "Uncentralised notes"],
        metrics: { f: 4, t: 3, b: 4, d: 4 },
        problemKey: "unstructured_followup"
      },
      {
        id: 4,
        question: "Do employees have to record or communicate the same customer or enquiry information in more than one place?",
        hint: "Check for duplicate data entry between sales, stores, and invoicing.",
        ownerAnswer: "Sometimes. For example, if a customer first contacts us on WhatsApp or by phone and then places an order, the employee has to use those details again while processing the order. The same customer may also contact us through another channel later.",
        quickTags: ["Re-entering into billing", "Copying from chat to ledger", "Asking customer twice", "Manual verbal relay"],
        metrics: { f: 4, t: 3, b: 4, d: 4 },
        problemKey: "limited_outreach"
      },
      {
        id: 5,
        question: "What happens after receiving an enquiry until the customer decides whether to purchase?",
        hint: "Describe your sales consultation, quote sharing, and negotiation cycle.",
        ownerAnswer: "Usually the customer tells us what they need, and we suggest the suitable product, give them the price and answer their questions. If they decide to buy, they can place the order through the store, website, WhatsApp or phone. Some enquiries don't turn into an immediate purchase.",
        quickTags: ["Suggest product & quote price", "Answering queries", "Negotiation", "Waiting for customer return"],
        metrics: { f: 4, t: 3, b: 4, d: 3 },
        problemKey: "unstructured_followup"
      },
      {
        id: 6,
        question: "What happens when a potential customer does not purchase immediately?",
        hint: "Is there a structured callback reminder, or does the lead go cold?",
        ownerAnswer: "Usually we give them the product details and price, and then they may contact us again when they are ready. We don't have a fixed schedule for contacting every person who has enquired. If they come back later, we continue from there.",
        quickTags: ["No fixed follow-up schedule", "Wait for customer to call back", "Lead goes inactive", "Occasional reminder"],
        metrics: { f: 4, t: 3, b: 4, d: 4 },
        problemKey: "unstructured_followup"
      },
      {
        id: 7,
        question: "How do you manage follow-up with existing customers after they have made a purchase?",
        hint: "Repeat orders, warranty checks, retention offers, or broadcast announcements.",
        ownerAnswer: "We have around 150 customer contacts, and we usually communicate with regular customers through calls or WhatsApp. Some customers purchase from us three or four times, and a few regular customers bring larger contracts. We don't regularly send product updates or promotional messages to all our customers.",
        quickTags: ["Informal WhatsApp chats", "Occasional phone calls", "No broadcast campaigns", "Reactive communication only"],
        metrics: { f: 4, t: 3, b: 4, d: 4 },
        problemKey: "limited_outreach"
      },
      {
        id: 8,
        question: "How do you keep track of which sources are bringing new customers?",
        hint: "Can you measure returns from walk-ins, online directories, word of mouth, or ads?",
        ownerAnswer: "We know that customers come through the store, WhatsApp, the website, Google and people who know us, but we don't record the number of new customers coming from each source separately. We mainly know the source when it comes up during the interaction.",
        quickTags: ["Mental estimation", "No source attribution log", "Not recorded separately", "Discovered conversationally"],
        metrics: { f: 3, t: 2, b: 3, d: 4 },
        problemKey: "acquisition_tracking"
      },
      {
        id: 9,
        question: "What problems occur most often while managing customer acquisition and follow-up?",
        hint: "List your biggest bottlenecks in lead volume, conversion, and marketing consistency.",
        ownerAnswer: "Getting new customers consistently is the main difficulty. We have regular customers and people who know us in the construction industry, but reaching new contractors, builders, architects and tile installers outside that network is harder. We also don't do regular marketing activities; social-media posts are occasional, such as festival posts.",
        quickTags: ["Inconsistent customer acquisition", "Reaching beyond network is hard", "Irregular marketing activities", "Social posts only on festivals"],
        metrics: { f: 5, t: 3, b: 5, d: 4 },
        problemKey: "inconsistent_acquisition"
      },
      {
        id: 10,
        question: "Which improvement would make the biggest difference to your business?",
        hint: "What is your single highest priority outcome from digital adoption?",
        ownerAnswer: "Getting more new customers would make the biggest difference, especially contractors, builders, architects and tile installers. We would like to reach more people who don't already know us and bring in enquiries more consistently.",
        quickTags: ["Consistent B2B buyer enquiries", "Reaching target trade professionals", "Automated catalogue discovery", "Measurable lead channels"],
        metrics: { f: 5, t: 3, b: 5, d: 4 },
        problemKey: "limited_reach"
      }
    ],
    identifiedProblems: [
      { id: "inconsistent_acquisition", name: "Inconsistent customer acquisition", f: 5, t: 3, b: 5, d: 4, avg: 4.25, isPrimary: true },
      { id: "limited_reach", name: "Limited reach beyond existing networks", f: 4, t: 3, b: 5, d: 4, avg: 4.00 },
      { id: "marketing_execution", name: "Inconsistent marketing execution", f: 4, t: 3, b: 4, d: 4, avg: 3.75 },
      { id: "limited_outreach", name: "Limited proactive customer outreach", f: 4, t: 3, b: 4, d: 4, avg: 3.75 },
      { id: "unstructured_followup", name: "Unstructured enquiry follow-up", f: 3, t: 3, b: 3, d: 4, avg: 3.25 },
      { id: "acquisition_tracking", name: "Lack of acquisition source tracking", f: 3, t: 2, b: 3, d: 4, avg: 3.00 }
    ],
    primaryOpportunity: {
      title: "Consistent Customer Acquisition",
      score: "4.25/5",
      summary: "Establish an additional, manageable channel for attracting new business enquiries without requiring complicated new workflows or additional staffing.",
      whyItRanksFirst: [
        "The owner explicitly identified finding new customers consistently as the biggest challenge.",
        "Existing relationships bring customers, but reaching buyers outside those networks is difficult.",
        "Marketing activities are currently occasional (festival posts only).",
        "The business aims to specifically attract contractors, builders, architects, and tile installers."
      ],
      recommendationSummary: "Create product listings that give potential business buyers another way to discover the business, starting with a basic verification listing."
    },
    toolsComparison: {
      criteria: [
        { key: "reach", label: "New customer reach", weight: 0.40, desc: "Potential to reach buyers beyond existing networks" },
        { key: "ease", label: "Ease of use", weight: 0.25, desc: "Expected ease of learning and operating the tool" },
        { key: "fit", label: "Workflow fit", weight: 0.20, desc: "Compatibility with current business processes" },
        { key: "staff", label: "Staffing requirements", weight: 0.15, desc: "Whether existing team can manage it" }
      ],
      tools: [
        {
          name: "IndiaMART",
          reach: 5,
          ease: 4,
          fit: 4,
          staff: 4,
          weightedScore: 4.40,
          highlight: "Top Recommendation",
          badgeColor: "success",
          overview: "Leading Indian B2B marketplace with immense buyer density for construction, industrial & building chemicals.",
          pros: ["Massive contractor & builder search presence", "Simple WhatsApp & mobile lead notifications", "Basic zero-cost starter listing available"],
          cons: ["Paid visibility catalog packages require ROI evaluation before upgrading"]
        },
        {
          name: "TradeIndia",
          reach: 4,
          ease: 4,
          fit: 4,
          staff: 4,
          weightedScore: 4.00,
          highlight: "Runner Up",
          badgeColor: "info",
          overview: "Established B2B portal for wholesale trade with active national supplier directories.",
          pros: ["Straightforward profile management", "Direct enquiry routing to phone"],
          cons: ["Lower local contractor query density than IndiaMART for building chemicals"]
        },
        {
          name: "Google Ads",
          reach: 5,
          ease: 2,
          fit: 3,
          staff: 2,
          weightedScore: 3.40,
          highlight: "Complex / High Cost",
          badgeColor: "warning",
          overview: "Search-intent advertising targeting local searches for specialized adhesives & chemicals.",
          pros: ["Direct search intent for high-value immediate orders"],
          cons: ["Requires continuous keyword tuning, daily budgets, and agency/specialist setup"]
        }
      ]
    },
    workflowComparison: {
      today: [
        { step: 1, title: "Reach customers", desc: "New customers mainly come through existing relationships and current channels." },
        { step: 2, title: "Promote products", desc: "Marketing activities are occasional, limiting consistency of outreach beyond network." },
        { step: 3, title: "Receive enquiries", desc: "Enquiries arrive fragmented through store, WhatsApp Business, website, phone calls." },
        { step: 4, title: "Track results", desc: "Customer sources are not recorded systematically; hard to compare ROI." }
      ],
      proposed: [
        { step: 1, title: "Expand reach", desc: "Create product listings that give verified business buyers another discovery channel." },
        { step: 2, title: "Improve visibility", desc: "Add relevant product names, specifications, photographs, packaging sizes, and contacts." },
        { step: 3, title: "Handle enquiries", desc: "Review platform leads at set daily slots alongside normal WhatsApp customer talks." },
        { step: 4, title: "Track outcomes", desc: "Log enquiry source to evaluate lead-to-order conversion and catalog performance." }
      ]
    },
    costAndValue: {
      options: [
        {
          title: "Option 1 — Basic Listing",
          cost: "₹0",
          subtext: "Indicative starting cost",
          details: "Free supplier registration, upload product catalog photos, receive direct buyer enquiries to phone/email.",
          action: "Recommended starting point"
        },
        {
          title: "Option 2 — Paid Visibility",
          cost: "₹35,000 / yr + GST",
          subtext: "Mini Dynamic Catalog (approx. ₹41,300 with 18% GST)",
          details: "Priority search ranking, verified trust seal, guaranteed enquiry credits, dedicated buyer alerts.",
          action: "Consider only after 30-day pilot validation"
        }
      ],
      pilotMetrics: [
        { metric: "Genuine enquiries", measure: "Count of relevant buyer enquiries received" },
        { metric: "Qualified enquiries", measure: "Enquiries matching catalog products, specs, and bulk quantities" },
        { metric: "Orders generated", measure: "Finalized sales orders attributable to platform" },
        { metric: "Conversion rate", measure: "(Orders ÷ Qualified enquiries) × 100%" },
        { metric: "Acquisition cost", measure: "Platform charges + staff time per acquired client" },
        { metric: "Staff effort", measure: "Hours spent checking and responding to queries per week" }
      ],
      implementationSteps: [
        { num: 1, title: "Create Your Business Listing", action: "Visit marketplace, register using business credentials, check free tier features." },
        { num: 2, title: "Add Your Products", action: "Upload crisp product photographs, specifications, packaging sizes, and technical sheets." },
        { num: 3, title: "Check Incoming Enquiries", action: "Designate one team member to review notifications at fixed slots daily." },
        { num: 4, title: "Respond to Interested Buyers", action: "Follow up immediately with pricing, application guidance, and sample logistics." },
        { num: 5, title: "Record the Outcome", action: "Log quote status, outcome, and channel attribution in simple daily ledger." }
      ]
    }
  },

  order_management: {
    id: "order_management",
    name: "Order & Inventory Management",
    shortName: "Order Management",
    tagline: "Streamline quotation-to-cash, stock checks, order dispatch, and payment ledger tracking",
    icon: "📦",
    accentColor: "#10b981",
    gradient: "linear-gradient(135deg, #059669, #34d399)",
    caseStudyProfile: {
      companyName: "Commercial Wholesale & Distribution Unit",
      industry: "Building chemicals, tile grouts & architectural adhesives",
      teamSize: "7 employees · 30 daily orders",
      currentChannels: "WhatsApp order lists, physical order chits, paper dispatch receipts",
      ownerPriority: "Eliminate stock discrepancies and automate pending balance follow-ups"
    },
    questions: [
      {
        id: 1,
        question: "How do customers place orders with your business?",
        hint: "Phone, WhatsApp text messages, voice notes, shop visits, written POs.",
        ownerAnswer: "Most regular contractors message us a list on WhatsApp or call in. Walk-in customers place orders at the counter. We note items on a rough notepad.",
        quickTags: ["WhatsApp chat", "Phone calls", "Store counter visits", "Written order slips"],
        metrics: { f: 5, t: 4, b: 4, d: 4 },
        problemKey: "order_intake_friction"
      },
      {
        id: 2,
        question: "How do employees check whether requested stock is physically available before confirming?",
        hint: "Do they walk into godown, check an Excel sheet, or rely on memory?",
        ownerAnswer: "The counter person yells to the godown worker or walks into the warehouse to physically verify whether we have sufficient drums or bags left in stock.",
        quickTags: ["Physical godown walk", "Asking warehouse verbally", "Checking paper ledger", "Guessing from memory"],
        metrics: { f: 5, t: 4, b: 5, d: 4 },
        problemKey: "stock_visibility"
      },
      {
        id: 3,
        question: "How are quotations or estimates generated and shared with customers?",
        hint: "Handwritten receipts, calculator + WhatsApp message, or digital GST billing software?",
        ownerAnswer: "We calculate rates manually with a calculator and message back the total amount on WhatsApp, or handwrite a rough quote on a slip.",
        quickTags: ["Calculator & WhatsApp text", "Handwritten rough slip", "Printed billing machine", "Manual excel estimate"],
        metrics: { f: 4, t: 3, b: 4, d: 4 },
        problemKey: "manual_invoicing"
      },
      {
        id: 4,
        question: "What happens when an ordered product is out of stock after order confirmation?",
        hint: "Delayed shipments, customer dissatisfaction, emergency reordering.",
        ownerAnswer: "We have to call the customer, apologize, suggest a substitute brand, or rush to our master distributor to arrange emergency stock, which eats into margin.",
        quickTags: ["Emergency distributor run", "Apologizing & rescheduling", "Lost sales order", "Margin loss on rush purchase"],
        metrics: { f: 4, t: 4, b: 4, d: 4 },
        problemKey: "stock_visibility"
      },
      {
        id: 5,
        question: "How is dispatch and delivery tracked from the store to the job site?",
        hint: "Delivery driver note, WhatsApp location, verbal confirmation upon delivery.",
        ownerAnswer: "The auto or delivery driver takes a physical challan slip. Once unloaded, the contractor signs it or sends an 'unloaded' text on WhatsApp.",
        quickTags: ["Physical delivery challan", "Driver phone confirmation", "Contractor WhatsApp photo", "No live tracking"],
        metrics: { f: 3, t: 3, b: 3, d: 3 },
        problemKey: "dispatch_tracking"
      },
      {
        id: 6,
        question: "How do you track unpaid invoices, credit limits, and outstanding balances?",
        hint: "Khata register, individual customer ledger books, mental notes.",
        ownerAnswer: "We have a physical credit book ('Khata'). When customers make partial payments, we cross out the line and write the new balance. Sometimes payments are missed.",
        quickTags: ["Physical Khata register", "Sticky notes & ledger", "End-of-month reconciliation", "Untracked credit amounts"],
        metrics: { f: 5, t: 4, b: 5, d: 4 },
        problemKey: "untracked_credit"
      },
      {
        id: 7,
        question: "Do staff members ever duplicate order entry or misplace delivery slips?",
        hint: "Loss of paperwork, billing discrepancies, dispute over received quantities.",
        ownerAnswer: "Yes, during peak morning hours, slips sometimes get misplaced or the bill is cut twice, causing confusion during monthly account closing.",
        quickTags: ["Lost slips during rush hours", "Duplicate bill entries", "Disputes during month-end", "Delayed account closing"],
        metrics: { f: 4, t: 4, b: 4, d: 4 },
        problemKey: "manual_invoicing"
      },
      {
        id: 8,
        question: "How do you determine when to reorder fast-moving products from suppliers?",
        hint: "Do you get automatic low-stock alerts or wait until shelves are empty?",
        ownerAnswer: "We check the racks during Saturday closing. When bags look low, we write a purchase order to the manufacturer for Monday shipment.",
        quickTags: ["Visual check on weekends", "No minimum stock alert", "Stockouts before reorder", "Delayed bulk shipments"],
        metrics: { f: 4, t: 3, b: 4, d: 4 },
        problemKey: "stock_visibility"
      },
      {
        id: 9,
        question: "What is the biggest operational headache in your current ordering workflow?",
        hint: "Cash flow delay, lost inventory, slow billing, or customer complaints.",
        ownerAnswer: "Following up on pending credit payments without annoying customers, and not knowing exact stock counts without walking into the godown every hour.",
        quickTags: ["Delayed receivables follow-up", "Godown stock blindness", "Manual invoice generation", "Error-prone credit books"],
        metrics: { f: 5, t: 4, b: 5, d: 4 },
        problemKey: "untracked_credit"
      },
      {
        id: 10,
        question: "What improvement would save the most hours for your sales and store team?",
        hint: "Quick phone billing, auto WhatsApp invoices, instant stock alerts, or credit reminders.",
        ownerAnswer: "A simple phone billing app where typing an order automatically checks stock, creates a GST invoice, sends a WhatsApp link to the buyer, and updates their balance.",
        quickTags: ["1-click WhatsApp GST bill", "Real-time stock deduction", "Automated payment reminders", "Barcode / SKU lookup"],
        metrics: { f: 5, t: 4, b: 5, d: 4 },
        problemKey: "manual_invoicing"
      }
    ],
    identifiedProblems: [
      { id: "untracked_credit", name: "Untracked pending credit & slow receivables", f: 5, t: 4, b: 5, d: 4, avg: 4.50, isPrimary: true },
      { id: "stock_visibility", name: "Lack of real-time godown stock visibility", f: 5, t: 4, b: 4, d: 4, avg: 4.25 },
      { id: "manual_invoicing", name: "Manual paper invoicing & duplicate entries", f: 4, t: 4, b: 4, d: 4, avg: 4.00 },
      { id: "order_intake_friction", name: "Fragmented order intake across chat & calls", f: 4, t: 3, b: 4, d: 3, avg: 3.50 },
      { id: "dispatch_tracking", name: "Paper-based dispatch without delivery receipts", f: 3, t: 3, b: 3, d: 3, avg: 3.00 }
    ],
    primaryOpportunity: {
      title: "Automated Billing & Digital Credit Ledger",
      score: "4.50/5",
      summary: "Adopt a mobile-first GST billing and receivables solution to replace paper khata books, enable 1-click WhatsApp invoicing, and auto-track outstanding credit.",
      whyItRanksFirst: [
        "Unpaid balances and credit reconciliation cause direct cash flow bottlenecks.",
        "Manual invoice creation during rush hours leads to misplaced challans and duplicate billing.",
        "Stock counts currently require walking into the godown repeatedly.",
        "Team needs a simple tool that staff can operate from a smartphone without accounting training."
      ],
      recommendationSummary: "Switch from paper ledger to Vyapar or Khatabook to automate payment reminders and synchronize stock counts upon sale."
    },
    toolsComparison: {
      criteria: [
        { key: "reach", label: "Core capability & features", weight: 0.40, desc: "Inventory deduction, GST invoicing, UPI payment links" },
        { key: "ease", label: "Ease of use", weight: 0.25, desc: "Simple interface manageable by store counter staff on phone" },
        { key: "fit", label: "Workflow fit", weight: 0.20, desc: "WhatsApp sharing and regional language support" },
        { key: "staff", label: "Staffing requirements", weight: 0.15, desc: "Zero specialized accountant required" }
      ],
      tools: [
        {
          name: "Vyapar",
          reach: 5,
          ease: 5,
          fit: 4,
          staff: 4,
          weightedScore: 4.65,
          highlight: "Top Recommendation",
          badgeColor: "success",
          overview: "India's premier mobile & desktop billing app built specifically for retailers, wholesalers, and distributors.",
          pros: ["1-click GST & non-GST billing", "Auto-sends invoice with UPI link on WhatsApp", "Low-stock warning popups", "Works offline"],
          cons: ["Multi-warehouse sync requires premium desktop license"]
        },
        {
          name: "Khatabook",
          reach: 4,
          ease: 5,
          fit: 4,
          staff: 5,
          weightedScore: 4.35,
          highlight: "Best for Pure Credit Ledger",
          badgeColor: "info",
          overview: "Zero-friction digital khata with free automated SMS & WhatsApp payment reminders.",
          pros: ["Extremely intuitive for non-tech staff", "Free automated payment reminders", "Instant QR payments"],
          cons: ["Advanced batch tracking and barcode inventory features are limited compared to Vyapar"]
        },
        {
          name: "Zoho Inventory",
          reach: 5,
          ease: 3,
          fit: 3,
          staff: 2,
          weightedScore: 3.55,
          highlight: "Complex ERP",
          badgeColor: "warning",
          overview: "Comprehensive cloud-based inventory management for multi-branch corporations.",
          pros: ["Full multi-warehouse and purchase-order pipeline"],
          cons: ["Steep learning curve, requires dedicated data entry staff, higher subscription tiers"]
        }
      ]
    },
    workflowComparison: {
      today: [
        { step: 1, title: "Take order", desc: "Notes scribbled on rough pads or saved inside WhatsApp chat threads." },
        { step: 2, title: "Check inventory", desc: "Verbal shout or walking into warehouse to count bags/drums." },
        { step: 3, title: "Issue bill", desc: "Handwritten paper slips or manual calculator total with high error potential." },
        { step: 4, title: "Collect payment", desc: "Paper khata entries with forgotten overdue credit and awkward follow-up calls." }
      ],
      proposed: [
        { step: 1, title: "Digital order entry", desc: "Select client name & items in 3 taps on mobile or POS screen." },
        { step: 2, title: "Instant stock check", desc: "System instantly displays available stock and triggers reorder alert if below threshold." },
        { step: 3, title: "Share professional PDF", desc: "Generate GST bill with UPI QR code sent directly to client WhatsApp." },
        { step: 4, title: "Automated reminders", desc: "Scheduled friendly WhatsApp reminders automatically sent before due date." }
      ]
    },
    costAndValue: {
      options: [
        {
          title: "Option 1 — Vyapar Mobile Plan",
          cost: "₹2,399 / yr",
          subtext: "Unlimited mobile billing & ledger",
          details: "Complete GST invoicing, WhatsApp sharing, automated payment reminders, basic inventory tracking.",
          action: "Recommended starting plan"
        },
        {
          title: "Option 2 — Desktop + Mobile Combo",
          cost: "₹4,999 / yr",
          subtext: "Full counter POS & warehouse sync",
          details: "Thermal barcode printer support, multi-device real-time sync, comprehensive tax reports for CA.",
          action: "Upgrade when scaling past 2 counters"
        }
      ],
      pilotMetrics: [
        { metric: "Billing speed", measure: "Time taken to create & share bill (reduced from 8 mins to 45 secs)" },
        { metric: "Overdue recovery", measure: "% of pending balances collected within 15 days" },
        { metric: "Stockout prevention", measure: "Zero unfulfilled customer orders due to unexpected zero stock" },
        { metric: "Ledger discrepancies", measure: "Zero mismatches between physical cash drawer and bill records" }
      ],
      implementationSteps: [
        { num: 1, title: "Download App & Add Business Info", action: "Install Vyapar on store phone and enter GST/business name & UPI payment handle." },
        { num: 2, title: "Import Top 30 Fast-Moving Items", action: "Add standard sale prices and current physical quantities for top SKUs." },
        { num: 3, title: "Import Top Customer Balances", action: "Transfer current paper Khata closing balances to customer profiles." },
        { num: 4, title: "Issue First 20 Digital Invoices", action: "Test live billing during business hours, sending PDF bills on WhatsApp." },
        { num: 5, title: "Enable Auto Payment Reminders", action: "Turn on scheduled automated WhatsApp reminders for credit customers." }
      ]
    }
  },

  employee_management: {
    id: "employee_management",
    name: "Employee & Attendance Management",
    shortName: "Employee Management",
    tagline: "Digitize daily staff attendance, salary calculation, task accountability, and shift tracking",
    icon: "👥",
    accentColor: "#8b5cf6",
    gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
    caseStudyProfile: {
      companyName: "Field Sales & Retail Operations Team",
      industry: "Retail counter staff, store helpers, drivers and field marketing reps",
      teamSize: "7-12 employees",
      currentChannels: "Paper attendance register, WhatsApp group check-ins, monthly manual notebook math",
      ownerPriority: "Clear attendance records, transparent advance salary tracking, and on-time task delivery"
    },
    questions: [
      {
        id: 1,
        question: "How do employees mark their daily attendance and work hours?",
        hint: "Signatures in paper muster roll, biometric fingerprint, or verbal arrival notice.",
        ownerAnswer: "They sign their name in a physical register at the entrance. Sometimes someone signs for a late colleague, or they forget to sign until evening.",
        quickTags: ["Paper muster roll / register", "Verbal greeting", "WhatsApp group message", "No formal logging"],
        metrics: { f: 5, t: 4, b: 4, d: 4 },
        problemKey: "attendance_leaks"
      },
      {
        id: 2,
        question: "How do you track attendance for staff who travel (delivery drivers, site reps, installers)?",
        hint: "Are site visits verified by location, photo, or trust?",
        ownerAnswer: "Drivers and site visitors text us when they reach the job site. We have no way to verify if they arrived on time or visited all assigned sites.",
        quickTags: ["WhatsApp location drop", "Trust / verbal claim", "Customer calls confirming arrival", "Unverified travel logs"],
        metrics: { f: 4, t: 3, b: 4, d: 4 },
        problemKey: "field_tracking"
      },
      {
        id: 3,
        question: "How do you manage salary advances, loans, and overtime payments?",
        hint: "Notebook entries, cash chits, informal mental deductions at month end.",
        ownerAnswer: "Staff frequently request ₹500 or ₹2,000 cash advance mid-month. The owner notes it on a small pocket diary. At month-end, there are frequent arguments.",
        quickTags: ["Pocket diary notes", "Loose cash slips", "Month-end salary disputes", "Lost track of advances"],
        metrics: { f: 5, t: 4, b: 5, d: 4 },
        problemKey: "advance_tracking"
      },
      {
        id: 4,
        question: "How many hours does the owner or manager spend calculating monthly payroll?",
        hint: "Manual counting of register ticks, half-days, leaves, and loan deductions.",
        ownerAnswer: "It takes almost 2 full days at the beginning of each month to flip through pages, count present/absent days, subtract advances, and calculate cash envelopes.",
        quickTags: ["1-2 full days every month", "Manual page counting", "Calculator math errors", "Stressful closing days"],
        metrics: { f: 4, t: 5, b: 4, d: 4 },
        problemKey: "manual_payroll"
      },
      {
        id: 5,
        question: "How are daily tasks and duties assigned to individual staff members?",
        hint: "Morning verbal instructions, WhatsApp chat group, written job whiteboard.",
        ownerAnswer: "The store manager tells them verbally what to unload or clean. If a task isn't finished by evening, staff say they weren't assigned that duty.",
        quickTags: ["Verbal morning briefing", "Shared WhatsApp group", "No individual assignment", "Blame shifting when missed"],
        metrics: { f: 4, t: 3, b: 3, d: 4 },
        problemKey: "task_accountability"
      },
      {
        id: 6,
        question: "What happens when an employee takes sudden unscheduled leave?",
        hint: "Last-minute WhatsApp text, no replacement, sudden operational slowdown.",
        ownerAnswer: "They call in 15 minutes before the shift starts. Other workers are left scrambling to handle both counter billing and warehouse loading.",
        quickTags: ["Last minute phone call", "No backup coverage", "Service slowdown", "Disrupted customer deliveries"],
        metrics: { f: 4, t: 3, b: 4, d: 3 },
        problemKey: "leave_management"
      },
      {
        id: 7,
        question: "Do employees have transparent visibility into their attendance, deductions, and payslips?",
        hint: "Do they get a digital slip or just cash in an envelope?",
        ownerAnswer: "No, they only receive cash and a verbal summary. Because they can't verify their own days, they often suspect deductions are incorrect.",
        quickTags: ["Cash envelope only", "No printed/digital payslip", "Suspicion about deductions", "Frequent questions about leaves"],
        metrics: { f: 4, t: 3, b: 4, d: 4 },
        problemKey: "staff_transparency"
      },
      {
        id: 8,
        question: "How do you track employee performance or sales incentives?",
        hint: "Is incentive calculation clear and motivating for staff?",
        ownerAnswer: "We want to give bonus per bag sold, but tracking who closed which sale is too complicated on paper, so we just give an informal festival bonus.",
        quickTags: ["No individual sales tracking", "Flat informal bonus", "Low staff motivation", "Manual calculation too hard"],
        metrics: { f: 3, t: 3, b: 4, d: 4 },
        problemKey: "task_accountability"
      },
      {
        id: 9,
        question: "What is the biggest hassle with staff management today?",
        hint: "Time-theft, ghost attendance, payroll disputes, or lack of staff accountability.",
        ownerAnswer: "The monthly fight over advance deductions, late arrivals, and the massive time wasted manually counting register days instead of doing sales.",
        quickTags: ["Advance deduction arguments", "Wasted days on payroll", "Late arrival time-theft", "Unreliable paper records"],
        metrics: { f: 5, t: 4, b: 5, d: 4 },
        problemKey: "advance_tracking"
      },
      {
        id: 10,
        question: "What digital tool feature would solve 80% of this problem immediately?",
        hint: "Selfie attendance, auto-calculated WhatsApp salary slips, GPS staff tracker.",
        ownerAnswer: "A phone app where staff scan a QR or take a selfie at arrival, advances are logged instantly with an SMS confirmation, and salary slips generate automatically.",
        quickTags: ["Selfie / QR attendance", "Instant advance SMS confirmation", "1-click salary slip generation", "GPS field visit stamp"],
        metrics: { f: 5, t: 4, b: 5, d: 4 },
        problemKey: "attendance_leaks"
      }
    ],
    identifiedProblems: [
      { id: "advance_tracking", name: "Disputed salary advances & informal cash loans", f: 5, t: 4, b: 5, d: 4, avg: 4.50, isPrimary: true },
      { id: "manual_payroll", name: "Multi-day manual payroll & leave math", f: 4, t: 5, b: 4, d: 4, avg: 4.25 },
      { id: "attendance_leaks", name: "Proxy signing & unverified late arrivals", f: 5, t: 3, b: 4, d: 4, avg: 4.00 },
      { id: "staff_transparency", name: "Lack of transparent salary breakdown for workers", f: 4, t: 3, b: 4, d: 4, avg: 3.75 },
      { id: "task_accountability", name: "Verbal task assignments without ownership", f: 4, t: 3, b: 3, d: 4, avg: 3.50 }
    ],
    primaryOpportunity: {
      title: "Selfie/QR Attendance & Automated Payroll",
      score: "4.50/5",
      summary: "Deploy a simple smartphone staff app to replace the paper register, automatically track advances with SMS receipts, and generate accurate salary slips in seconds.",
      whyItRanksFirst: [
        "Eliminates monthly friction and arguments regarding cash advances and deductions.",
        "Saves 2 days of manual bookkeeping time for the business owner every single month.",
        "Prevents proxy attendance and unrecorded tardiness through geotagged selfie or shop QR scan.",
        "Gives blue-collar staff a transparent digital record in their native language."
      ],
      recommendationSummary: "Implement PagarBook or SalaryBox for mobile attendance capture and instant WhatsApp salary slip distribution."
    },
    toolsComparison: {
      criteria: [
        { key: "reach", label: "Core staff features", weight: 0.40, desc: "Selfie attendance, advance management, auto-calculated PF/ESI/salaries" },
        { key: "ease", label: "Ease of use", weight: 0.25, desc: "Regional languages (Hindi, Kannada, Tamil, etc.) with voice assist" },
        { key: "fit", label: "Workflow fit", weight: 0.20, desc: "WhatsApp payslips and UPI salary payout directly from app" },
        { key: "staff", label: "Staffing requirements", weight: 0.15, desc: "No HR team or technical software skills needed" }
      ],
      tools: [
        {
          name: "PagarBook",
          reach: 5,
          ease: 5,
          fit: 4,
          staff: 4,
          weightedScore: 4.65,
          highlight: "Top Recommendation",
          badgeColor: "success",
          overview: "India's leading staff attendance & payroll app designed specifically for MSME shops, factories, and warehouses.",
          pros: ["QR & biometric punch options", "Instant SMS alert to worker when advance is recorded", "1-click salary calculation with overtime/late penalties", "Multi-language support"],
          cons: ["Advanced geo-tracking for on-field sales reps requires desktop plan"]
        },
        {
          name: "SalaryBox",
          reach: 4,
          ease: 5,
          fit: 4,
          staff: 4,
          weightedScore: 4.25,
          highlight: "Great Mobile Alternative",
          badgeColor: "info",
          overview: "Smart attendance and salary software with accurate GPS geofencing for field and store staff.",
          pros: ["Easy GPS geofenced punch", "Leaves approval system", "Direct UPI payouts"],
          cons: ["Biometric hardware integration is more limited than PagarBook"]
        },
        {
          name: "Zoho People",
          reach: 5,
          ease: 2,
          fit: 2,
          staff: 2,
          weightedScore: 3.10,
          highlight: "Enterprise HR Only",
          badgeColor: "warning",
          overview: "Corporate human resource management system suited for tech companies and structured offices.",
          pros: ["Full appraisal, compliance, and corporate LMS modules"],
          cons: ["Too complex for retail shop workers and warehouse helpers; requires IT setup"]
        }
      ]
    },
    workflowComparison: {
      today: [
        { step: 1, title: "Morning attendance", desc: "Staff sign a paper register; late arrivals slip in undetected or proxies sign." },
        { step: 2, title: "Cash advances", desc: "Cash handed out on verbal request with quick scribbles in pocket diaries." },
        { step: 3, title: "Month-end calculation", desc: "Owner spends 2 exhausting days tallying ticks, leaves, and deducted advances." },
        { step: 4, title: "Pay distribution", desc: "Cash envelope given with vague verbal explanation, leading to worker distrust." }
      ],
      proposed: [
        { step: 1, title: "Digital selfie / QR punch", desc: "Employee scans shop QR code or takes a quick selfie upon clocking in." },
        { step: 2, title: "Instant advance SMS", desc: "Advance recorded in app sends instant confirmation SMS/WhatsApp to employee." },
        { step: 3, title: "1-click salary generation", desc: "System instantly calculates exact payable amount taking into account leaves, overtime & advances." },
        { step: 4, title: "WhatsApp payslip", desc: "Worker receives clean digital payslip explaining gross pay, deductions, and net amount." }
      ]
    },
    costAndValue: {
      options: [
        {
          title: "Option 1 — PagarBook Standard Plan",
          cost: "₹1,499 / yr",
          subtext: "For up to 10 staff members",
          details: "Selfie/QR attendance, automated salary calculations, WhatsApp payslips, advance logs with SMS verification.",
          action: "Recommended starting plan"
        },
        {
          title: "Option 2 — PagarBook Premium (with GPS Field Staff)",
          cost: "₹2,999 / yr",
          subtext: "For retail + outdoor delivery drivers",
          details: "Live location attendance, geofenced boundaries, automated shift roster, direct bank salary payout.",
          action: "Upgrade for delivery teams"
        }
      ],
      pilotMetrics: [
        { metric: "Payroll calculation time", measure: "Reduced from 16 hours to 5 minutes" },
        { metric: "Advance record accuracy", measure: "100% agreement on advances with zero dispute" },
        { metric: "On-time arrival rate", measure: "Improvement in staff punctuality due to transparent timestamps" },
        { metric: "Worker satisfaction", measure: "Higher trust through clear monthly WhatsApp salary receipts" }
      ],
      implementationSteps: [
        { num: 1, title: "Install App & Print Shop QR", action: "Download PagarBook, create business profile, and print the attendance QR code for the entrance." },
        { num: 2, title: "Add Employee Profiles", action: "Add 7 employees with their base monthly or daily salary rates and phone numbers." },
        { num: 3, title: "Demonstrate QR Scan to Staff", action: "Show staff how to scan the QR code on arrival; takes 10 seconds per worker." },
        { num: 4, title: "Log Next Mid-Month Advance", action: "When an advance is requested, enter it on the phone to test the instant confirmation SMS." },
        { num: 5, title: "Generate First Digital Payroll", action: "Review the automated month-end summary and share PDF payslips with staff." }
      ]
    }
  }
};
