#!/bin/bash

set -e

host="$1"
shift
cmd="$@"

wait_for_postgres() {
    until pg_isready -h "$host" >/dev/null 2>&1; do
        >&2 echo "Postgres is unavailable - sleeping"
        sleep 1
    done
}

wait_for_postgres

>&2 echo "Postgres is up - executing command"
exec $cmd
