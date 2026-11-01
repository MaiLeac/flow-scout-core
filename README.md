# FlowScout Core 🔍

An exploratory testing framework, crowdtesting heuristics library, and automated QA scout system.

## 📁 Repository Structure

```text
├── AGENT_RULES.md               # Directives & 4-Question Filter for autonomous QA agents
├── guidelines/                  # Platform rules and academy handbooks
│   ├── utest_academy_handbook.md
│   ├── crowdtesting_hunter_guide.md
│   ├── mobile_testing_guide.md
│   ├── test_io_handbook.md
│   ├── test_io_cheatsheet.md
│   └── tester_work_handbook.md
├── heuristics/                  # Tested bug heuristics & lessons learned
│   ├── MASTER_BUG_LIBRARY.md   # Systematic bug patterns (H-01 to H-08)
│   └── BUG_LESSONS.md          # Real cycle insights & evidence-driven rules
└── bug-hunter/                  # Automated scout engine (TypeScript / Playwright)
    ├── configs/                # Target scout configurations
    ├── src/                    # Scout runner, policy, triage & inventory
    └── tests/                  # Engine tests & fixtures
```

## 🚀 Purpose
Provides both human testers and AI agents a unified, evidence-driven knowledge base to discover, verify, and document high-value defects across modern web and mobile platforms.
