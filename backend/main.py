from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineRequest(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(data: PipelineRequest):
    dag = is_dag(data.nodes, data.edges)  

    return {
        "num_nodes": len(data.nodes),
        "num_edges": len(data.edges),
        "is_dag": dag
    }

def is_dag(nodes, edges):
    graph = {node["id"]: [] for node in nodes}

    for edge in edges:
        graph[edge["source"]].append(edge["target"])

    visited = set()
    rec_stack = set()

    def dfs(node):
        if node in rec_stack:
            return False
        if node in visited:
            return True

        visited.add(node)
        rec_stack.add(node)

        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False

        rec_stack.remove(node)
        return True

    for node_id in graph:
        if node_id not in visited:
            if not dfs(node_id):
                return False

    return True
