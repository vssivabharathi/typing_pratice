from django.db import models

# Create your models here.

class React(model.Model):
    name = models.CharField(max_length=30)
    detail=models.CharField(max_length=500)
