# Frontend Application

This is the Next.js frontend for the Qado Takehome assignment. It provides the user interface for interacting with the Contract Analysis API.

## Tech Stack & Tools

*   **[Next.js](https://nextjs.org/)**: The React framework for the web.
*   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
*   **[TanStack Query](https://tanstack.com/query/latest)**: Powerful asynchronous state management for server state.
*   **[Orval](https://orval.dev/)**: An OpenAPI client generator that creates TypeScript models and React Query hooks directly from our backend schema.

## Type Safety Philosophy

In this repository, we prioritize **End-to-End Type Safety**.

Instead of manually writing `fetch` calls and duplicating TypeScript interfaces that might drift out of sync with the Python backend, we use **Orval**. This ensures that if the Python Pydantic model changes, the frontend TypeScript build will break immediately, alerting you to update your UI.

## Getting Started

### Prerequisites

*   **Node.js**: (Managed via Volta or Homebrew)
*   **Backend OpenAPI Spec**: The backend's `openapi.json` must be generated (Orval reads it from the local file, not a live server).

### Installation

Install the dependencies:

```bash
npm install
```

### Development Server

Start the frontend development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Code Generation (Orval)

We generate our API layer automatically. You do **not** need to write fetchers manually.

### How to Generate

1.  **Ensure the OpenAPI spec exists**: Orval reads the schema from the local file at `../backend/openapi.json`. If it doesn't exist yet, generate it:
    ```bash
    # In the backend/ folder
    uv run generate-openapi
    ```
2.  **Run the Generator**:
    ```bash
    # In the frontend/ folder
    npm run generate-api
    ```

### What gets generated?

Look in `src/api/generated.ts`. You will find:
*   **TypeScript Interfaces**: Matching the Pydantic models (e.g., `ContractAnalysisResult`).
*   **React Query Hooks**: Ready-to-use hooks like `useAnalyzeContract()`.

### Usage Example

In your components, you simply import the generated hook:

```tsx
import { useAnalyzeContract } from '@/api/generated';

export function Analyzer() {
  const { mutate, data, isPending } = useAnalyzeContract();

  const handleAnalyze = () => {
    mutate({ data: { text: "Contract text..." } });
  };

  return (
    // ...
  );
}
```

## Project Structure

```
frontend/
├── orval.config.ts     # Configuration for API generation
├── src/
│   ├── app/            # Next.js App Router pages & layouts
│   └── api/
│       ├── generated.ts    # 🤖 Generated API client (Do not edit manually)
│       └── custom-instance.ts # Custom Axios/fetch instance for Orval
└── package.json
```
