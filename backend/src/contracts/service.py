import os

from openai import AsyncOpenAI


# Initialize the OpenAI client
# This expects OPENAI_API_KEY to be present in the environment variables (e.g. loaded from .env)
def _get_openai_client():
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY environment variable must be set")
    return AsyncOpenAI(api_key=api_key)


openai_client = _get_openai_client()

# TODO: Add business logic here
