from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    brand = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10,decimal_places=2) 
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User,on_delete = models.CASCADE)

class Order(models.Model):
    STATUS_CHOICES =(
        ('pending','Pending'),
        ('processing','Processing'),
        ('shipped','shipped'),
        ('delivered','Delivered'),
        ('cancelled','Cancelled')
    )
    order = models.ForeignKey(Product, on_delete = models.CASCADE)
    applicant = models.ForeignKey(User, on_delete = models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    ordered_on = models.DateTimeField(auto_now_add=True)

