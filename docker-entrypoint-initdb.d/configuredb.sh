#!/usr/bin/env bash

export PGPASSWORD="node_password"

database="monstersdb"

echo "Configuring database: $database"

dropdb -U node_user -h localhost monstersdb
createdb -U node_user -h localhost monstersdb

psql -U node_user -h localhost monstersdb < ./bin/sql/monsters.sql

echo "$database configured"