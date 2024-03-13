from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update with your frontend URL
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Add OPTIONS method
    allow_headers=["*"],
)

# Placeholder function for URL classification
def classify_url(url: str) -> str:
    # Perform classification logic here (placeholder)
    # This could involve using a pre-trained machine learning model
    # Replace this with your actual classification logic
    # For example, you could use a model.predict() function
    return "phishing"  # Placeholder response

@app.options("/classify/")  # Handle OPTIONS requests
async def options(request: Request):
    return {}

@app.post("/classify/")  # Handle POST requests
async def classify(url: str):
    classification_result = classify_url(url)
    return {"result": classification_result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
