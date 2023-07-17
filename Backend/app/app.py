from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .recommend import response, popular, search

import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000","https://bookbuddy636.netlify.app"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# get request
@app.get("/",tags=['ROOT'])
async def root():
    return {"Name": "BookBuddy", "Desc": "Machine Learning based book recommedation system."}

class MyData(BaseModel):
    text: str


# Post
@app.post("/search",tags=['recom'])
async def post(data: MyData):
    text = data.json()
    text = text[len('{"term: " '):- len('"}')]
    res = search(text)
    print(text)
    print(res)
    res = list(res.keys())
    return {
            "status":"Success",
            "reply": res
            }

@app.post("/recommend",tags=['recom'])
async def post(data: MyData):
    text = data.json()
    text = text[len('{"term: " '):- len('"}')]
    res = response(text)
    print(text)
    print(res)
    return {
            "status":"Success",
            "reply": res
            }

# Get 
@app.get("/popular",tags=['recom'])
async def get():
    df = popular()
    return {
        "status" : "success",
        "books" : df
    }

# # Update
# @app.put("/update/{id}",tags=['todos'])
# async def update(id, body):
#     return {}

# # Delete
# @app.delete("/update/{id}",tags=['todos'])
# async def update(id):
#     return {}
    
