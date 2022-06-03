from django.db import models

# Create your models here.

class Profile(models.Model):
    first_name=models.CharField( max_length=50)
    last_name=models.CharField( max_length=50)
    phone=models.CharField( max_length=50)
    email=models.CharField( max_length=50)
    date=models.CharField( max_length=50)
    note=models.TextField()
    address=models.CharField( max_length=50)    
    
    def __str__(self):
        return self.first_name
    
    