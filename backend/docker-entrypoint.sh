#!/bin/sh
echo "waiting for database"
./app/wait-for-it db:5432
# Collect static files
echo "Collect static files"
python manage.py collectstatic --noinput

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

# Start server
echo "Starting server"
# prod
gunicorn Instruct.wsgi:application --bind 0.0.0.0:82

# # dev
# python manage.py runserver 0.0.0.0:8080