# Semantic Search API with pgvector

This is a simple **Semantic Search API** built using **Flask** and **pgvector** on PostgreSQL, designed to allow you to perform semantic search using **text embeddings**. It takes a query, converts it to a vector using an external embedding API, and then performs a **KNN search** in PostgreSQL using the `pgvector` extension.

## Features

- **Text Query**: Accepts a text input (query) and converts it to a vector using an embedding API.
- **KNN Search**: Uses **PostgreSQL** with **pgvector** to perform cosine similarity-based search on pre-stored embeddings.
- **PostgreSQL Integration**: Utilizes the `pgvector` extension for storing and querying vector embeddings.
- **API Endpoints**:
  - `POST /search/semantic`: Perform a semantic search by embedding a query and finding the most similar entries in the database.

## Requirements

Make sure you have the following libraries installed before running the API:

```bash
pip install -r requirements.txt
