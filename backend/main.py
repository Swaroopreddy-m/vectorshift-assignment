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
    return {
        "num_nodes": len(data.nodes),
        "num_edges": len(data.edges),
        "is_dag": True  # placeholder
    }
