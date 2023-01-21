FROM python:3.11.0a3-alpine3.15



WORKDIR /app

# sh# app dependancies
# application server dependancies
RUN apk update \
     && apk add libffi-dev gcc python3-dev musl-dev  jpeg-dev zlib-dev
RUN pip install --upgrade pip 



COPY  requirements.txt .
RUN pip install -r requirements.txt
COPY . .

RUN chmod +x wait-for-it.sh
RUN chmod +x docker-entrypoint.sh
EXPOSE 80
