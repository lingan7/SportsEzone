from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
from django.contrib.auth.models import User

from .models import Product, Order
from .serializers import RegisterSerializer, ProductSerializer, OrderSerializer

@api_view(['GET'])
def hello_api(request):
    return Response({"message":"Hello from Django API"})

@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save() #saves user
        return Response({'message':'User Registered Successfully!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def basic_login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    try:
        user = User.objects.get(username = username, password = password)
        return Response({"user_id" : user.id, "username": user.username, "message":"Login Successful"}, status = status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({"message":"Invalid Credentials"}, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products,many=True)
    return Response(serializer.data) 

@api_view(['POST'])
def place_order(request):
    serializer = OrderSerializer(data=request.data)

    #check order already exists
    order_id = request.data.get("order")
    applicant_id = request.data.get("applicant")
    if Order.objects.filter(order_id = order_id, applicant_id = applicant_id ).exists():
        return Response({"message" :"You already placed the order for this product!"}, status = status.HTTP_400_BAD_REQUEST)

    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Order Placed Successfully"}, status = status.HTTP_201_CREATED)
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    


