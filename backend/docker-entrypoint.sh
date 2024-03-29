#!/bin/sh


# Collect static files
echo "Collect static files"
python manage.py collectstatic 

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

# Start server
echo "Starting server"
# prod
gunicorn portfolio.wsgi:application --bind 0.0.0.0:80

