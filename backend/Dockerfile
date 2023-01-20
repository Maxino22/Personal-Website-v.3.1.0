FROM python:3.10.0-alpine3.15

WORKDIR /app

# application server dependancies
RUN apk update \
     && apk add bash postgresql-dev libffi-dev gcc python3-dev musl-dev  jpeg-dev zlib-dev
RUN pip install --upgrade pip 



# app dependancies
COPY ./requirements.txt /app/
# We use the --system flag so packages are installed into the system python
# and not into a virtualenv. Docker containers don't need virtual environments. 
RUN pip install -r requirements.txt

# copying application
COPY . .

RUN chmod +x wait-for-it.sh
RUN chmod +x docker-entrypoint.sh
EXPOSE 82


