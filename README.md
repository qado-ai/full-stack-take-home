# Take-Home Challenge: FDE AI Contract Intelligence Prototype
Welcome to the Forward Deployed Engineer challenge!

**Role**: Forward deployed AI Product 
**Timeboxed**: 6–8 hours recommended. We value a working MVP over a complete feature set. If you hit the time limit, document what you would have done next.

This exercise evaluates both **technical product engineering skills** and the ability to **communicate solutions to customers**. Many engineers in our team interact directly with clients, so explaining technical capabilities in a clear and structured way is an important part of the role.

---

## How to Start This Challenge

1. Click the green **"Use this template"** button (top right of this page) and select **"Create a new repository"**.
2. **Important**: Select **"Private"** under the visibility settings to keep your solution hidden.
3. Name the repository `yourname-qado-takehome`.
4. Once you are finished, invite `salpers` and `heikotroetsch` as collaborators so we can review your code.

---

## Prerequisites & Logistics (Read this first!)

**API Keys**  
We will provide an OpenAI API key via email along with the invite to this challenge.

---

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


# 5. Client Exercise (Product & Communication)

Engineers in this role frequently work with clients to identify valuable product features.

Please prepare a **very short presentation (2 slides)** about a potential new feature for this product. You should to come up with this idea and a good way to communicate it. Try to identify something with high value to the client. 

The goal is **not visual polish**, but **clarity and structured thinking**.

### Slide 1 — Feature Idea

Explain the **new feature idea** and why you think it matters for the procurement teams. 

---

### Slide 2 — Exploring Client Priorities

Assume the client is interested in the feature.

Show how you would **explore different feature alternatives with them**. The goal of this slide is to demonstrate **how you would drive a product conversation with a client** to identify what details bring value to them.

---

## 6. Review Session Structure

The review meeting will be split into **two parts**.

### Part 1 — Technical Discussion

You will walk us through:

- Your architecture and implementation
- Key technical decisions
- Prompt design and extraction logic
- Trade-offs you made due to the time constraint

---

### Part 2 — Mock Client Discussion

We will simulate a **client conversation**.

Please:

1. Explain the product and the features you built **as if we were a procurement client**, not engineers.
2. Present your **2 slides** describing the feature idea.
3. Use the second slide to **guide a conversation about feature priorities**.

We are evaluating:

- Clarity of explanation
- Structured thinking
- Ability to translate technical capabilities into business value

---

## 7. Evaluation Criteria

We are looking for a pragmatic Product Engineer who produces clean code. We evaluate your submission based on the following criteria:
* **Code Quality & Clarity:** We do not expect an optimized, production-ready application, but best practices (e.g., error handling and code readability) should be followed. We look for clean patterns and **end-to-end type-safety**. Use the provided codegen tooling—we prefer generated clients over manually written `fetch` calls or duplicated type definitions.
* **Security Hygiene:** Do not commit the API key to git. Use a .env file (patterns provided in the backend folder).
* **Pragmatic Problem Solving:**  Did you focus on the core value (risk detection)? We prefer a solid, functional solution for the business problem over over-engineered CSS or unfinished "shiny features."
* **AI-Native UX & Accuracy:** How do you handle it when the AI is unsure or takes a long time? We evaluate whether the interface remains responsive during analysis and how transparently the AI results and risk flags are presented to the user.

---

### Customer Communication

We also evaluate:

- How clearly you explain the product
- How you frame technical features in terms of **customer value**
- How you structure a **feature discovery conversation**

---

# 8. Submission Guidelines

> **⚠️ IMPORTANT: Do not fork this repository publicly.**

### 🚀 How to Submit Your Work
Before proceeding, please ensure you have generated this repository as a **Private** repo and are actively working on the `FDE` branch.

1. **Complete your work** Commit your changes directly to this branch (or merge your feature branches into it).

2. **Invite Collaborators** Invite `@salpers` and `@patgun` to your private repository so we can review your code.

3. **Notify Us** Email us the link to your repository once you are finished and ready for review.

---

We look forward to seeing your solution!
