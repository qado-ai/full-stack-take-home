# Take-Home Task: AI Contract Intelligence Prototype

**Role**: AI Product Engineer  
**Timeboxed**: 6-8 hours recommended. We value a working MVP over a complete feature set. If you hit the time limit, document what you would have done next.

## How to Start This Challenge

> **⚠️ CRITICAL: You must check "Include all branches" when creating your repository, otherwise you will lose the scaffolding for this specific role!**

1. **Create your repository:** Click the green **"Use this template"** button (top right of this page) and select **"Create a new repository"**.
2. **Include branches:** Check the box that says **"Include all branches"**.
3. **Set visibility:** Select **"Private"** under the visibility settings to keep your solution hidden.
4. **Name it:** Name the repository `yourname-qado-takehome`.
5. **Switch to this branch:** Once your new repository is generated, make sure you switch to your assigned role branch (e.g., `role/SWE`) to begin your work. 
6. **Submit:** When you are finished, invite **`@salpers`** and **`@heikotroetsch`** as collaborators so we can review your code.

## Prerequisites & Logistics (Read this first!)

*   **API Keys**: We will provide an OpenAI API key via email along with the invite to this challenge.

## 1. Project Overview

We are looking for a **Functional MVP**, not a polished SaaS product.

In procurement, teams struggle to quickly understand the risks in thousands of pages of legal text. Your goal is to build a prototype that demonstrates how we can solve this using AI.

**The Scenario**: A procurement manager uploads a section of a "Supply Agreement" and needs to know the key commercial terms and whether the contract is missing critical protections.

**Scope**:
*   **Focus**: Core extraction logic, correct data flow, and handling "risk" scenarios.
*   **Ignore**: User authentication, database persistence, or production deployment. Use a component library or standard Tailwind classes. We will not judge visual polish, only layout logic.

**Test Data**: We have provided a set of sample contracts for you to test with in [`data/sample_contracts.txt`](data/sample_contracts.txt).

## 2. Technical Stack

For detailed setup instructions, please refer to the specific **README** files in each folder:

*   **[Backend (Python)](backend/README.md)**: FastAPI, Pydantic, uv, Ruff, BasedPyright.
*   **[Frontend (Next.js)](frontend/README.md)**: React, Tailwind CSS, TanStack Query, Orval.

We have provided a fully scaffolded monorepo to save you time on setup. Your focus should be on the **Product Logic** and **AI Integration**, not on configuring Webpack or writing boilerplate.

### Pro-Tip: The Development Cycle
This project uses **Contract-Driven Development**. Your workflow should look like this:
1.  Edit Pydantic Models and FastAPI routes (`backend/src/...`).
2.  Run `uv run generate-openapi` (in backend).
3.  Run `npm run generate:api` (in frontend).
4.  Use the new types/hooks in your React components.

## 3. The Requirements

### Phase 1: The Core Extraction

**Goal:** Implement the logic in the backend service to analyze a contract text string.
**Extraction**: Use an LLM to extract the following fields structure:
*   **Parties** (Legal Entities)
*   **Term & Duration** (e.g., "12 months")
*   **Payment Terms** (e.g., "Net 30")
*   **Liability Cap** (Monetary limit)

**Technical constraints**:
*   You will need to define the **API Routes**, **Pydantic Models**, and **Business Logic**. Place your implementation in the `src/contracts` domain.

### Phase 2: The UI
Build the Contract Analysis Dashboard. Imagine a procurement manager who is tired of reading dense legal text. They want a simple tool where they can paste a contract, wait a moment, and see a summary of the key terms. Your job is to build that experience — making it intuitive, responsive, and easy to read.

**We prefer a rough UI with solid logic over a pretty UI.**

### Phase 3: Design the Risk Guardrails
Most contract headaches come from what isn’t written on the page. Your task is to identify specific gaps based on our "Company Playbook."

The Rules to Implement:

*   **Missing Liability Cap:** If the contract does not mention a Liability Cap (or says it is "unlimited"), flag this as HIGH RISK.

*   **Payment Terms:** If payment terms are longer than 60 days (e.g., "Net 90"), flag this as MEDIUM RISK.

Your job is to ensure the AI detects these specific conditions and the UI highlights them clearly to the user.

## 4. Implementation Plan (Milestones)

- **Backend Logic**: Define your Pydantic models (the contract) and implement the extraction logic.
- **The "Handshake"**: Generate the OpenAPI spec and run `npm run generate:api` to create your React hooks.
- **Frontend Layout**: Build the dashboard using the generated hooks (`useContractAnalysis`) to ensure types match immediately.
- **Prompt Engineering**: Refine the prompt to precisely extract legal terms and identify missing info.
- **Review**: No written documentation required. Be prepared to walk us through your solution and architectural decisions live.

## 5. Evaluation Criteria

We are looking for a pragmatic Product Engineer who produces clean code. We evaluate your submission based on the following criteria:
* **Code Quality & Clarity:** We do not expect an optimized, production-ready application, but best practices (e.g., error handling and code readability) should be followed. We look for clean patterns and **end-to-end type-safety**. Use the provided codegen tooling—we prefer generated clients over manually written `fetch` calls or duplicated type definitions.
* **Security Hygiene:** Do not commit the API key to git. Use a .env file (patterns provided in the backend folder).
* **Pragmatic Problem Solving:**  Did you focus on the core value (risk detection)? We prefer a solid, functional solution for the business problem over over-engineered CSS or unfinished "shiny features."
* **AI-Native UX & Accuracy:** How do you handle it when the AI is unsure or takes a long time? We evaluate whether the interface remains responsive during analysis and how transparently the AI results and risk flags are presented to the user.

## 6. Submission Guidelines

### 🚀 How to Submit Your Work
Before proceeding, please ensure you have generated this repository as a **Private** repo and are actively working on your role branch (e.g., `role/FDE`, `role/SWE`).

1. **Complete your work** Commit your changes directly to this branch (or merge your feature branches into it).

2. **Invite Collaborators** Invite `@salpers` and `@heikotroetsch` to your private repository so we can review your code.

3. **Notify Us** Email us the link to your repository once you are finished and ready for review.

---