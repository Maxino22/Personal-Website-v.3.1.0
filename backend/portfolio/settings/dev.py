from .common import *


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'not_secret'

CORS_ALLOW_ALL_ORIGINS = True
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True


# dev

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
