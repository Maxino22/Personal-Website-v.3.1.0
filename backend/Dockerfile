# Use the official Alpine Linux image as the base image
FROM python:3.11.0a3-alpine3.15


# Set the working directory
WORKDIR /usr/src/app

# Install required packages
RUN apk update && apk add --no-cache python3 python3-dev build-base mariadb-dev mariadb-client

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip3 install --upgrade pip && pip3 install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Wait for the MySQL container to be running on port 80 internally
CMD [ "sh", "-c", "while ! nc -z mysql 80; do sleep 3; done && python3 manage.py runserver 0.0.0.0:8000"]
