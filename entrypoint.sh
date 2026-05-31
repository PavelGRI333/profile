#!/bin/sh
# Simple entrypoint to run migrations then start the app
# Run Alembic migrations; ignore failures (e.g., if DB not ready yet)
# The app will attempt DB connection on start, so migrations may retry later.

# Retry migrations a few times
MAX_RETRIES=5
COUNT=0
while [ $COUNT -lt $MAX_RETRIES ]; do
  if alembic upgrade head; then
    break
  fi
  COUNT=$((COUNT + 1))
  echo "Migration attempt $COUNT failed, retrying in 3s..."
  sleep 3
done

# Start the FastAPI app
exec uvicorn profile_app.main:main_app --host 0.0.0.0 --port 8000
