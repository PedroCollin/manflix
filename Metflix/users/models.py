from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    nome = models.CharField(max_length=125)
    email = models.CharField(max_length=125, unique=False)
    foto = models.TextField(default='None')
    username = models.CharField(max_length=125, unique="True")

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []