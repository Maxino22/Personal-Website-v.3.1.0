#!/bin/sh

#upgrade pip
echo "upgrading pip"
pip install --upgrade pip

# installing postgres and pillow dev
echo "installing postgres dev"
apk update && apk add postgresql-dev gcc python3-dev musl-dev  jpeg-dev zlib-dev