from django.shortcuts import render
from .models import (
    Book, Author, User, Post, Category, BookReview, Order, OrderItem, Payment, Shipping
)
from .serializers import (
    BookSerializer, AuthorSerializer, UserSerializer, PostSerializer, CategorySerializer,
    BookReviewSerializer, OrderSerializer, OrderItemSerializer, PaymentSerializer, ShippingSerializer
)
from rest_framework import generics

# Books
class BookList(generics.ListCreateAPIView):
    queryset = Book.objects.all().order_by('-id')
    serializer_class = BookSerializer

class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

# Authors
class AuthorList(generics.ListCreateAPIView):
    queryset = Author.objects.all().order_by('-id')
    serializer_class = AuthorSerializer

class AuthorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

# Users
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all().order_by('-id')
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Posts
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('-id')
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# Categories
class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all().order_by('-id')
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Book Reviews
class BookReviewList(generics.ListCreateAPIView):
    queryset = BookReview.objects.all().order_by('-id')
    serializer_class = BookReviewSerializer

class BookReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer

# Orders
class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all().order_by('-id')
    serializer_class = OrderSerializer

class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

# Order Items
class OrderItemList(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all().order_by('-id')
    serializer_class = OrderItemSerializer

class OrderItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

# Payments
class PaymentList(generics.ListCreateAPIView):
    queryset = Payment.objects.all().order_by('-id')
    serializer_class = PaymentSerializer

class PaymentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

# Shipping
class ShippingList(generics.ListCreateAPIView):
    queryset = Shipping.objects.all().order_by('-id')
    serializer_class = ShippingSerializer

class ShippingDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shipping.objects.all()
    serializer_class = ShippingSerializer
