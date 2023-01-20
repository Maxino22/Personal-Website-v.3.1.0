FROM python:3.11.0a3-alpine3.15



WORKDIR /app

# app dependancies
COPY linux.sh ./
RUN chmod +x linux.sh
RUN ./linux.sh 

COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .

RUN chmod +x docker-entrypoint.sh
EXPOSE 80