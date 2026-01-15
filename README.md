# vectorshift-assignment
A React + React Flow pipeline builder with a FastAPI backend, built for the VectorShift frontend technical assessment. Includes reusable node abstractions, dynamic text node variables, and backend DAG validation.

---

## 🌐 Live Demo

Frontend is deployed using GitHub Pages:

🔗 https://swaroopreddy-m.github.io/vectorshift-assignment

> Note: GitHub Pages hosts only static content.  
> The backend must be run locally for full functionality (pipeline submission & DAG validation).

---

## 🚀 Frontend Features

### 🔹 Node Abstraction
- Introduced a reusable **BaseNode** abstraction to eliminate duplicated layout and handle logic.
- Existing nodes were enhanced to use this abstraction.
- Added multiple new nodes (Delay, API, Math, Merge, Condition, etc.) to demonstrate scalability.

### 🔹 Styling
- Applied consistent, modern styling across all nodes and UI components.
- Shared styles reused across nodes for maintainability and visual consistency.

### 🔹 Text Node Enhancements
- Text node dynamically **auto-resizes** as the user types.
- Supports template variables using `{{variable}}` syntax.
- Automatically generates **dynamic input handles** for each detected variable.
- Outputs a single computed value for downstream nodes.

### 🔹 User Experience
- Drag-and-drop node creation
- Node deletion via keyboard and UI controls
- Clean, intuitive pipeline editor interface

---

## 🔁 Backend Features

- Built using **FastAPI**
- Endpoint: `/pipelines/parse`
- Calculates:
  - Total number of nodes
  - Total number of edges
  - Whether the pipeline forms a **Directed Acyclic Graph (DAG)**

### Example Response
```json
{
  "num_nodes": 6,
  "num_edges": 5,
  "is_dag": true
}
