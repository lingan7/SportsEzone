from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Order


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    class Meta:
        model = User 
        fields = ['username','email','password']
    
class ProductSerializer(serializers.ModelSerializer):
    created_by = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = "__all__" #special literal get all the fields inside the model 

class OrderSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Order
        fields = "__all__"

