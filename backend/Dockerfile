FROM python:3.11.0a3-alpine3.15



WORKDIR /app

# sh# app dependancies
# COPY linux.sh ./
# RUN chmod +x linux.
RUN ["pip" ,"install" ,"--upgrade", "pip"]

COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .

RUN chmod +x docker-entrypoint.sh
EXPOSE 80
