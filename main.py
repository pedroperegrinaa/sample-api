from fastapi import FastAPI

app = FastAPI()

@app.get("/index")
def read_root():
    return {"message": "Hello, World!"}
 
