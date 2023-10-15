from django.db import models

# Create your models here.

class Demande(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    Email = models.EmailField()
<<<<<<< HEAD
    mobile = models.CharField(max_length=200)
=======
    mobile = models.CharField(max_length=100,default='123')
>>>>>>> 1f51488baec714b81764e596079bc46497f96b1b
    address = models.CharField(max_length=200)
    postcode = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    brand = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    vehicle_type = models.CharField(max_length=200)
    fuel = models.CharField(max_length=200)
    gear_type = models.CharField(max_length=200)
    last_MFK = models.CharField(max_length=200)
    performance = models.CharField(max_length=200)
    mileage = models.CharField(max_length=200)
    initial_registration = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    doors = models.CharField(max_length=200)
    message = models.CharField(max_length=200)
    asking_price = models.CharField(max_length=200)
    Displacement = models.CharField(max_length=200)
<<<<<<< HEAD
    image1 = models.ImageField(upload_to='photos/', blank=True, null=True)
    image2 = models.ImageField(upload_to='photos/', blank=True, null=True)
    image3 = models.ImageField(upload_to='photos/', blank=True, null=True)
    image4 = models.ImageField(upload_to='photos/', blank=True, null=True)

=======
    
>>>>>>> 1f51488baec714b81764e596079bc46497f96b1b







