import { MODULES } from './data.js';
import { initThreeBackground } from './three-scene.js';

// Application State
const state = {
  currentModuleId: 'marketing',
  currentQuestionIndex: 0,
  userResponses: {}, // { moduleId: { questionId: { text, f, t, b, d, score } } }
  isDemoMode: false,
  theme: localStorage.getItem('bizfit_theme') || 'dark'
};

// DOM Elements
const elements = {
  // Views
  viewModuleSelect: document.getElementById('view-module-select'),
  viewQuestionnaire: document.getElementById('view-questionnaire'),
  viewResultsReport: document.getElementById('view-results-report'),

  // Header
  btnLogoHome: document.getElementById('btn-logo-home'),
  themeToggle: document.getElementById('theme-toggle'),
  btnRestart: document.getElementById('btn-restart'),

  // Wizard Header & Stepper
  btnBackToModules: document.getElementById('btn-back-to-modules'),
  currentModuleBadge: document.getElementById('current-module-badge'),
  qCurrentNumber: document.getElementById('q-current-number'),
  qTotalNumber: document.getElementById('q-total-number'),
  progressBarFill: document.getElementById('progress-bar-fill'),
  dotStepperContainer: document.getElementById('dot-stepper-container'),

  // Active Question Card
  activeQuestionCard: document.getElementById('active-question-card'),
  qCategoryTag: document.getElementById('q-category-tag'),
  qTitleText: document.getElementById('q-title-text'),
  qHintText: document.getElementById('q-hint-text'),
  btnQuickFillSample: document.getElementById('btn-quick-fill-sample'),
  qInputText: document.getElementById('q-input-text'),
  quickTagsList: document.getElementById('quick-tags-list'),

  // Criteria Sliders
  liveQuestionScore: document.getElementById('live-question-score'),
  sliderF: document.getElementById('slider-f'),
  sliderT: document.getElementById('slider-t'),
  sliderB: document.getElementById('slider-b'),
  sliderD: document.getElementById('slider-d'),
  valF: document.getElementById('val-f'),
  valT: document.getElementById('val-t'),
  valB: document.getElementById('val-b'),
  valD: document.getElementById('val-d'),
  descF: document.getElementById('desc-f'),
  descT: document.getElementById('desc-t'),
  descB: document.getElementById('desc-b'),
  descD: document.getElementById('desc-d'),

  // Wizard Footer Buttons
  btnPrevQuestion: document.getElementById('btn-prev-question'),
  btnNextQuestion: document.getElementById('btn-next-question'),

  // Report Elements
  reportTrackName: document.getElementById('report-track-name'),
  reportCompanyMeta: document.getElementById('report-company-meta'),
  repPrimaryScore: document.getElementById('rep-primary-score'),
  repPrimaryTitle: document.getElementById('rep-primary-title'),
  repPrimarySummary: document.getElementById('rep-primary-summary'),
  repPrimaryReasons: document.getElementById('rep-primary-reasons'),
  tbodyProblems: document.getElementById('tbody-problems'),
  toolsCardsContainer: document.getElementById('tools-cards-container'),
  tbodyTools: document.getElementById('tbody-tools'),
  repToolsInterpretation: document.getElementById('rep-tools-interpretation'),
  workflowTodayList: document.getElementById('workflow-today-list'),
  workflowProposedList: document.getElementById('workflow-proposed-list'),
  costOptionsContainer: document.getElementById('cost-options-container'),
  pilotMetricsList: document.getElementById('pilot-metrics-list'),
  implementationStepsContainer: document.getElementById('implementation-steps-container'),

  // ROI Calculator
  roiAvgOrder: document.getElementById('roi-avg-order'),
  roiMargin: document.getElementById('roi-margin'),
  roiCost: document.getElementById('roi-cost'),
  roiResultText: document.getElementById('roi-result-text'),

  // Report Action Buttons
  btnPrintReport: document.getElementById('btn-print-report'),
  btnRetakeSame: document.getElementById('btn-retake-same'),
  btnSwitchTrackReport: document.getElementById('btn-switch-track-report'),
  btnOpenIndiamart: document.getElementById('btn-open-indiamart'),
  btnExploreAlt: document.getElementById('btn-explore-alt'),
  btnReviewPilot: document.getElementById('btn-review-pilot'),

  // Toast
  toast: document.getElementById('toast')
};

// Descriptions for slider levels 1 to 5
const CRITERIA_DESCRIPTIONS = {
  f: {
    1: 'Rare / Almost never occurs',
    2: 'Occasional difficulty (once a month)',
    3: 'Noticeable difficulty (weekly occurrence)',
    4: 'Recurring difficulty (several times a week)',
    5: 'Constant / Daily challenge during operations'
  },
  t: {
    1: 'Minimal manual effort required',
    2: 'Low manual effort (< 1 hr/week)',
    3: 'Moderate effort (few hours of manual follow-up)',
    4: 'Substantial effort (eats up regular work hours)',
    5: 'Excessive manual workload (multiple hours daily or multi-day month-end)'
  },
  b: {
    1: 'Negligible business impact',
    2: 'Limited impact on customers or sales',
    3: 'Noticeable effect on revenue or operational speed',
    4: 'Substantial effect on customer satisfaction & cash flow',
    5: 'Major bottleneck directly limiting business growth & revenue'
  },
  d: {
    1: 'Digital tools currently handle this well',
    2: 'Basic tools present with small friction',
    3: 'Moderate digital gap (relying on fragmented chats/notes)',
    4: 'Substantial digitalisation gap (purely manual paper/memory)',
    5: 'Complete absence of digital support / severe manual dependency'
  }
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
function init() {
  applyTheme(state.theme);
  try {
    initThreeBackground();
  } catch (err) {
    console.warn('Three.js background:', err);
  }
  bindEvents();
  renderTracksGrid();
}

function bindEvents() {
  // Theme Toggle
  elements.themeToggle.addEventListener('click', toggleTheme);

  // Logo Click -> Home
  elements.btnLogoHome.addEventListener('click', () => switchView('module-select'));
  elements.btnRestart.addEventListener('click', () => switchView('module-select'));

  // Change Track from Wizard
  elements.btnBackToModules.addEventListener('click', () => switchView('module-select'));

  // Question Inputs & Sliders
  elements.qInputText.addEventListener('input', handleTextInput);
  elements.btnQuickFillSample.addEventListener('click', loadSampleAnswer);

  [elements.sliderF, elements.sliderT, elements.sliderB, elements.sliderD].forEach(slider => {
    slider.addEventListener('input', handleSliderChange);
  });

  // Wizard Navigation
  elements.btnPrevQuestion.addEventListener('click', prevQuestion);
  elements.btnNextQuestion.addEventListener('click', nextQuestion);

  // Keyboard shortcut: Ctrl+Enter to proceed
  document.addEventListener('keydown', (e) => {
    if (elements.viewQuestionnaire.classList.contains('active')) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        nextQuestion();
      }
    }
  });

  // Report Actions
  elements.btnPrintReport.addEventListener('click', () => window.print());
  elements.btnRetakeSame.addEventListener('click', () => startModule(state.currentModuleId, state.isDemoMode));
  elements.btnSwitchTrackReport.addEventListener('click', () => switchView('module-select'));

  // ROI Calculator Inputs
  [elements.roiAvgOrder, elements.roiMargin, elements.roiCost].forEach(inp => {
    inp.addEventListener('input', updateRoiCalculation);
  });

  // Decision CTAs in Report
  if (elements.btnOpenIndiamart) {
    elements.btnOpenIndiamart.addEventListener('click', () => {
      const mod = MODULES[state.currentModuleId];
      if (state.currentModuleId === 'marketing') {
        window.open('https://www.indiamart.com/', '_blank');
      } else if (state.currentModuleId === 'order_management') {
        window.open('https://vyaparapp.in/', '_blank');
      } else {
        window.open('https://pagarbook.com/', '_blank');
      }
    });
  }

  if (elements.btnExploreAlt) {
    elements.btnExploreAlt.addEventListener('click', () => {
      document.querySelector('.tech-fit-card').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (elements.btnReviewPilot) {
    elements.btnReviewPilot.addEventListener('click', () => {
      document.querySelector('.pilot-eval-box').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// VIEW NAVIGATION
// ==========================================================================
function switchView(viewName) {
  elements.viewModuleSelect.classList.remove('active');
  elements.viewQuestionnaire.classList.remove('active');
  elements.viewResultsReport.classList.remove('active');

  if (viewName === 'module-select') {
    elements.viewModuleSelect.classList.add('active');
    elements.btnRestart.style.display = 'none';
  } else if (viewName === 'questionnaire') {
    elements.viewQuestionnaire.classList.add('active');
    elements.btnRestart.style.display = 'inline-flex';
  } else if (viewName === 'results-report') {
    elements.viewResultsReport.classList.add('active');
    elements.btnRestart.style.display = 'inline-flex';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// TRACK SELECTION & SETUP
// ==========================================================================
function renderTracksGrid() {
  const container = document.getElementById('tracks-container');
  if (!container) return;

  // Track select / demo buttons
  document.querySelectorAll('.select-track-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const moduleId = e.currentTarget.getAttribute('data-module');
      startModule(moduleId, false);
    });
  });

  document.querySelectorAll('.demo-track-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const moduleId = e.currentTarget.getAttribute('data-module');
      startModule(moduleId, true);
    });
  });
}

function startModule(moduleId, isDemo = false) {
  const moduleData = MODULES[moduleId];
  if (!moduleData) return;

  state.currentModuleId = moduleId;
  state.currentQuestionIndex = 0;
  state.isDemoMode = isDemo;

  // Initialize response state container if absent
  if (!state.userResponses[moduleId]) {
    state.userResponses[moduleId] = {};
  }

  // Pre-seed responses if Demo Mode requested
  if (isDemo) {
    moduleData.questions.forEach(q => {
      state.userResponses[moduleId][q.id] = {
        text: q.ownerAnswer,
        f: q.metrics.f,
        t: q.metrics.t,
        b: q.metrics.b,
        d: q.metrics.d,
        score: (q.metrics.f + q.metrics.t + q.metrics.b + q.metrics.d) / 4
      };
    });
    showToast(`Loaded "${moduleData.caseStudyProfile.companyName}" verified case study!`);
  }

  // Update Header Badge
  elements.currentModuleBadge.innerHTML = `
    <span class="badge-icon">${moduleData.icon}</span>
    <span class="badge-label">${moduleData.name}</span>
  `;

  // Render Stepper Dots
  renderDotStepper(moduleData.questions.length);

  // Switch to questionnaire and load question 1
  switchView('questionnaire');
  loadQuestion(0);
}

// ==========================================================================
// QUESTIONNAIRE CONTROLLER
// ==========================================================================
function renderDotStepper(totalQuestions) {
  elements.dotStepperContainer.innerHTML = '';
  for (let i = 0; i < totalQuestions; i++) {
    const dot = document.createElement('button');
    dot.className = `step-dot ${i === 0 ? 'active' : ''}`;
    dot.textContent = i + 1;
    dot.title = `Jump to Question ${i + 1}`;
    dot.addEventListener('click', () => {
      saveCurrentQuestionState();
      loadQuestion(i);
    });
    elements.dotStepperContainer.appendChild(dot);
  }
}

function updateDotStepper(activeIndex) {
  const dots = elements.dotStepperContainer.querySelectorAll('.step-dot');
  const modId = state.currentModuleId;
  const modData = MODULES[modId];

  dots.forEach((dot, idx) => {
    dot.classList.remove('active', 'completed');
    if (idx === activeIndex) {
      dot.classList.add('active');
    } else {
      const qId = modData.questions[idx].id;
      if (state.userResponses[modId]?.[qId]?.text?.trim()) {
        dot.classList.add('completed');
      }
    }
  });
}

function loadQuestion(index) {
  const mod = MODULES[state.currentModuleId];
  if (!mod || !mod.questions[index]) return;

  state.currentQuestionIndex = index;
  const q = mod.questions[index];
  const total = mod.questions.length;

  // Animate Card
  elements.activeQuestionCard.style.opacity = '0';
  elements.activeQuestionCard.style.transform = 'translateY(10px)';

  setTimeout(() => {
    // Header & Meta
    elements.qCurrentNumber.textContent = index + 1;
    elements.qTotalNumber.textContent = total;
    elements.qCategoryTag.textContent = `Question ${index + 1} of ${total} • ${mod.shortName}`;
    elements.qTitleText.textContent = q.question;
    elements.qHintText.textContent = q.hint;

    // Progress bar
    const percent = Math.round(((index + 1) / total) * 100);
    elements.progressBarFill.style.width = `${percent}%`;

    // Existing or default values
    const saved = state.userResponses[state.currentModuleId]?.[q.id];
    const textVal = saved ? saved.text : (state.isDemoMode ? q.ownerAnswer : '');
    const fVal = saved ? saved.f : q.metrics.f;
    const tVal = saved ? saved.t : q.metrics.t;
    const bVal = saved ? saved.b : q.metrics.b;
    const dVal = saved ? saved.d : q.metrics.d;

    elements.qInputText.value = textVal;

    // Set Sliders
    setSliderValues(fVal, tVal, bVal, dVal);

    // Quick Tags
    renderQuickTags(q.quickTags);

    // Update Dots
    updateDotStepper(index);

    // Prev / Next button state
    elements.btnPrevQuestion.disabled = index === 0;
    if (index === total - 1) {
      elements.btnNextQuestion.innerHTML = 'Generate Discovery Report 📊';
      elements.btnNextQuestion.classList.add('primary-btn');
    } else {
      elements.btnNextQuestion.innerHTML = 'Next Question →';
    }

    elements.activeQuestionCard.style.opacity = '1';
    elements.activeQuestionCard.style.transform = 'translateY(0)';
  }, 120);
}

function setSliderValues(f, t, b, d) {
  elements.sliderF.value = f;
  elements.sliderT.value = t;
  elements.sliderB.value = b;
  elements.sliderD.value = d;

  elements.valF.textContent = f;
  elements.valT.textContent = t;
  elements.valB.textContent = b;
  elements.valD.textContent = d;

  elements.descF.textContent = CRITERIA_DESCRIPTIONS.f[f];
  elements.descT.textContent = CRITERIA_DESCRIPTIONS.t[t];
  elements.descB.textContent = CRITERIA_DESCRIPTIONS.b[b];
  elements.descD.textContent = CRITERIA_DESCRIPTIONS.d[d];

  calculateLiveScore();
}

function handleSliderChange(e) {
  const slider = e.target;
  const val = parseInt(slider.value, 10);

  if (slider.id === 'slider-f') {
    elements.valF.textContent = val;
    elements.descF.textContent = CRITERIA_DESCRIPTIONS.f[val];
  } else if (slider.id === 'slider-t') {
    elements.valT.textContent = val;
    elements.descT.textContent = CRITERIA_DESCRIPTIONS.t[val];
  } else if (slider.id === 'slider-b') {
    elements.valB.textContent = val;
    elements.descB.textContent = CRITERIA_DESCRIPTIONS.b[val];
  } else if (slider.id === 'slider-d') {
    elements.valD.textContent = val;
    elements.descD.textContent = CRITERIA_DESCRIPTIONS.d[val];
  }

  calculateLiveScore();
  saveCurrentQuestionState();
}

function calculateLiveScore() {
  const f = parseFloat(elements.sliderF.value);
  const t = parseFloat(elements.sliderT.value);
  const b = parseFloat(elements.sliderB.value);
  const d = parseFloat(elements.sliderD.value);

  const avg = ((f + t + b + d) / 4).toFixed(2);
  elements.liveQuestionScore.textContent = avg;
  return parseFloat(avg);
}

function handleTextInput() {
  saveCurrentQuestionState();
}

function renderQuickTags(tags) {
  elements.quickTagsList.innerHTML = '';
  if (!tags || tags.length === 0) return;

  tags.forEach(tag => {
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'quick-tag-pill';
    pill.textContent = `+ ${tag}`;
    pill.addEventListener('click', () => {
      const current = elements.qInputText.value.trim();
      if (!current) {
        elements.qInputText.value = tag;
      } else if (!current.includes(tag)) {
        elements.qInputText.value = `${current}, ${tag}`;
      }
      saveCurrentQuestionState();
      elements.qInputText.focus();
    });
    elements.quickTagsList.appendChild(pill);
  });
}

function loadSampleAnswer() {
  const mod = MODULES[state.currentModuleId];
  const q = mod.questions[state.currentQuestionIndex];
  if (!q) return;

  elements.qInputText.value = q.ownerAnswer;
  setSliderValues(q.metrics.f, q.metrics.t, q.metrics.b, q.metrics.d);
  saveCurrentQuestionState();
  showToast('Sample owner response loaded!');
}

function saveCurrentQuestionState() {
  const modId = state.currentModuleId;
  const mod = MODULES[modId];
  const q = mod.questions[state.currentQuestionIndex];
  if (!q) return;

  if (!state.userResponses[modId]) {
    state.userResponses[modId] = {};
  }

  const f = parseInt(elements.sliderF.value, 10);
  const t = parseInt(elements.sliderT.value, 10);
  const b = parseInt(elements.sliderB.value, 10);
  const d = parseInt(elements.sliderD.value, 10);
  const score = ((f + t + b + d) / 4);

  state.userResponses[modId][q.id] = {
    text: elements.qInputText.value,
    f,
    t,
    b,
    d,
    score
  };
}

function prevQuestion() {
  if (state.currentQuestionIndex > 0) {
    saveCurrentQuestionState();
    loadQuestion(state.currentQuestionIndex - 1);
  }
}

function nextQuestion() {
  saveCurrentQuestionState();
  const mod = MODULES[state.currentModuleId];
  const total = mod.questions.length;

  if (state.currentQuestionIndex < total - 1) {
    loadQuestion(state.currentQuestionIndex + 1);
  } else {
    // Finished all 10 questions -> generate and show report
    generateAndShowReport();
  }
}

// ==========================================================================
// RESULTS & DISCOVERY REPORT GENERATOR
// ==========================================================================
function generateAndShowReport() {
  const mod = MODULES[state.currentModuleId];
  if (!mod) return;

  // Set Domain & Profile Meta
  elements.reportTrackName.textContent = `${mod.name} — ${mod.caseStudyProfile.companyName}`;
  elements.reportCompanyMeta.textContent = `${mod.caseStudyProfile.industry} · ${mod.caseStudyProfile.teamSize} · Stated Priority: ${mod.caseStudyProfile.ownerPriority}`;

  // 1. Primary Opportunity Hero
  elements.repPrimaryScore.textContent = mod.primaryOpportunity.score.replace('/5', '');
  elements.repPrimaryTitle.textContent = mod.primaryOpportunity.title;
  elements.repPrimarySummary.textContent = mod.primaryOpportunity.summary;

  elements.repPrimaryReasons.innerHTML = '';
  mod.primaryOpportunity.whyItRanksFirst.forEach(r => {
    const li = document.createElement('li');
    li.textContent = r;
    elements.repPrimaryReasons.appendChild(li);
  });

  // 2. Opportunity Assessment Rubric Table
  renderProblemsTable(mod.identifiedProblems);

  // 3. Technology Fit Engine
  renderTechnologyFit(mod.toolsComparison);

  // 4. Workflow Comparison (Today vs Proposed)
  renderWorkflowComparison(mod.workflowComparison);

  // 5. Cost & Value + Pilot Checklist
  renderCostAndPilot(mod.costAndValue);

  // 6. Implementation Steps
  renderImplementationRoadmap(mod.costAndValue.implementationSteps);

  // Initial calculation of Break-even ROI
  updateRoiCalculation();

  // Switch to report view
  switchView('results-report');
  showToast('Discovery Report generated successfully!');
}

function renderProblemsTable(problems) {
  elements.tbodyProblems.innerHTML = '';

  problems.forEach((prob, idx) => {
    const tr = document.createElement('tr');

    let priorityBadge = '<span class="priority-pill rank-normal">Normal</span>';
    if (idx === 0) {
      priorityBadge = '<span class="priority-pill rank-1">★ Rank 1 (Primary)</span>';
    } else if (idx === 1) {
      priorityBadge = '<span class="priority-pill rank-2">Rank 2</span>';
    }

    tr.innerHTML = `
      <td><strong>${prob.name}</strong></td>
      <td class="text-center">${prob.f}</td>
      <td class="text-center">${prob.t}</td>
      <td class="text-center">${prob.b}</td>
      <td class="text-center">${prob.d}</td>
      <td class="text-center">
        <span class="score-badge ${prob.avg >= 4.0 ? 'high' : ''}">${prob.avg.toFixed(2)}</span>
      </td>
      <td>${priorityBadge}</td>
    `;
    elements.tbodyProblems.appendChild(tr);
  });
}

function renderTechnologyFit(fitData) {
  // Tool Cards
  elements.toolsCardsContainer.innerHTML = '';
  elements.tbodyTools.innerHTML = '';

  fitData.tools.forEach((tool, idx) => {
    // Card
    const card = document.createElement('div');
    card.className = `tool-card ${idx === 0 ? 'recommended' : ''}`;

    const prosHtml = tool.pros.map(p => `<li class="pro">✓ ${p}</li>`).join('');
    const consHtml = tool.cons.map(c => `<li class="con">✗ ${c}</li>`).join('');

    card.innerHTML = `
      <div class="tool-header-row">
        <h4 class="tool-name">${tool.name}</h4>
        <span class="tool-status-badge ${tool.badgeColor}">${tool.highlight}</span>
      </div>
      <div class="tool-score-hero">
        <span class="tool-score-num">${tool.weightedScore.toFixed(2)}</span>
        <span class="score-base">/5.00 weighted</span>
      </div>
      <p class="tool-overview">${tool.overview}</p>
      <ul class="tool-list">
        ${prosHtml}
        ${consHtml}
      </ul>
    `;
    elements.toolsCardsContainer.appendChild(card);

    // Table Row
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${tool.name}</strong></td>
      <td class="text-center">${tool.reach} / 5</td>
      <td class="text-center">${tool.ease} / 5</td>
      <td class="text-center">${tool.fit} / 5</td>
      <td class="text-center">${tool.staff} / 5</td>
      <td class="text-center">
        <strong style="color: ${idx === 0 ? '#34d399' : '#60a5fa'}; font-size: 1.05rem;">
          ${tool.weightedScore.toFixed(2)}
        </strong>
      </td>
      <td class="text-center">
        <span class="tool-status-badge ${tool.badgeColor}">${tool.highlight}</span>
      </td>
    `;
    elements.tbodyTools.appendChild(tr);
  });
}

function renderWorkflowComparison(wf) {
  // Today's steps
  elements.workflowTodayList.innerHTML = '';
  wf.today.forEach(s => {
    const item = document.createElement('div');
    item.className = 'step-item';
    item.innerHTML = `
      <div class="step-badge-num">${s.step}</div>
      <div>
        <div class="step-item-title">${s.title}</div>
        <div class="step-item-desc">${s.desc}</div>
      </div>
    `;
    elements.workflowTodayList.appendChild(item);
  });

  // Proposed steps
  elements.workflowProposedList.innerHTML = '';
  wf.proposed.forEach(s => {
    const item = document.createElement('div');
    item.className = 'step-item';
    item.innerHTML = `
      <div class="step-badge-num" style="background: rgba(16, 185, 129, 0.2); color: #34d399;">${s.step}</div>
      <div>
        <div class="step-item-title">${s.title}</div>
        <div class="step-item-desc">${s.desc}</div>
      </div>
    `;
    elements.workflowProposedList.appendChild(item);
  });
}

function renderCostAndPilot(costData) {
  // Cost Cards
  elements.costOptionsContainer.innerHTML = '';
  costData.options.forEach((opt, idx) => {
    const card = document.createElement('div');
    card.className = `cost-card ${idx === 0 ? 'highlight' : ''}`;
    card.innerHTML = `
      <h4 class="cost-title">${opt.title}</h4>
      <div class="cost-amount">${opt.cost}</div>
      <div class="cost-subtext">${opt.subtext}</div>
      <p class="cost-details">${opt.details}</p>
      <span class="cost-action-pill">${opt.action}</span>
    `;
    elements.costOptionsContainer.appendChild(card);
  });

  // Pilot Metrics Checklist
  elements.pilotMetricsList.innerHTML = '';
  costData.pilotMetrics.forEach(m => {
    const div = document.createElement('div');
    div.className = 'metric-item';
    div.innerHTML = `
      <div class="metric-name">📌 ${m.metric}</div>
      <div class="metric-measure">${m.measure}</div>
    `;
    elements.pilotMetricsList.appendChild(div);
  });
}

function renderImplementationRoadmap(steps) {
  elements.implementationStepsContainer.innerHTML = '';
  steps.forEach(s => {
    const item = document.createElement('div');
    item.className = 'timeline-step';
    item.innerHTML = `
      <div class="step-circle">${s.num}</div>
      <div class="step-details">
        <h5>${s.title}</h5>
        <p>${s.action}</p>
      </div>
    `;
    elements.implementationStepsContainer.appendChild(item);
  });
}

function updateRoiCalculation() {
  const avgOrder = parseFloat(elements.roiAvgOrder.value) || 15000;
  const marginPct = (parseFloat(elements.roiMargin.value) || 20) / 100;
  const toolCost = parseFloat(elements.roiCost.value) || 41300;

  const profitPerOrder = avgOrder * marginPct;
  if (profitPerOrder <= 0) {
    elements.roiResultText.innerHTML = 'Please enter valid order value and margin percentage.';
    return;
  }

  const ordersNeeded = Math.ceil(toolCost / profitPerOrder);
  const monthlyNeeded = (ordersNeeded / 12).toFixed(1);

  elements.roiResultText.innerHTML = `
    At a <strong>₹${avgOrder.toLocaleString()}</strong> order size and <strong>${Math.round(marginPct * 100)}% margin</strong> 
    (₹${Math.round(profitPerOrder).toLocaleString()} gross profit per order), you only need 
    <strong>${ordersNeeded} new orders in an entire year</strong> (approx. <strong>${monthlyNeeded} orders/month</strong>) 
    to completely break even on a ₹${toolCost.toLocaleString()} annual investment!
  `;
}

// ==========================================================================
// THEME & UTILITIES
// ==========================================================================
function toggleTheme() {
  const newTheme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('bizfit_theme', theme);

  if (theme === 'light') {
    elements.themeToggle.innerHTML = '<span class="theme-icon">☀️</span>';
    elements.themeToggle.title = 'Switch to Dark Theme';
  } else {
    elements.themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
    elements.themeToggle.title = 'Switch to Light Theme';
  }
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 3200);
}

// Run on page load
document.addEventListener('DOMContentLoaded', init);
