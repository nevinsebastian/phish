# backend.py
from fastapi import FastAPI
from pydantic import BaseModel

# Define FastAPI app
app = FastAPI()

# Define request body model
class URLInput(BaseModel):
    url: str

# Define URL classification endpoint
@app.post("/classify/")
async def classify_url(url_input: URLInput):
    # Placeholder for model prediction logic
    # Replace this with your actual model prediction code
    prediction = "legitimate"  # Example prediction
    return {"prediction": prediction}
