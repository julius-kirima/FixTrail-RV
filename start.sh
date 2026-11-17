#!/bin/sh
set -e

DB_FILE="${DB_FILE:-db.json}"
PORT="${PORT:-3000}"

if [ ! -f "$DB_FILE" ]; then
    cp db.json "$DB_FILE"
fi

exec npx json-server "$DB_FILE" --host 0.0.0.0 --port "$PORT"
