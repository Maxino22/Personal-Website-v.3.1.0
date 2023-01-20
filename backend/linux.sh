#!/bin/sh

#upgrade pip
# installing postgres and pillow dev
echo "installing mysql dependancies & pillow dependancies"
apk update && apk add mariadb-connector-c-dev libffi-dev gcc python3-dev musl-dev  jpeg-dev zlib-dev

echo "upgrading pip"
pip install --upgrade pip

echo "installing pipenv"
pip install pipenv
