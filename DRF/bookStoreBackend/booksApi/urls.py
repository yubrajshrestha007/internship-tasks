
from rest_framework import routers
from .views import *
from django.urls import path
urlpatterns = [
    path('books/', BookList.as_view(), name='book-list'),
    path('books/<int:pk>/', BookDetail.as_view(), name='book-detail'),
    path('authors/', AuthorList.as_view(), name='author-list'),
    path('authors/<int:pk>/', AuthorDetail.as_view(), name='author-detail'),
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('posts/', PostList.as_view(), name='post-list'),
    path('posts/<int:pk>/', PostDetail.as_view(), name='post-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('book-reviews/', BookReviewList.as_view(), name='bookreview-list'),
    path('book-reviews/<int:pk>/', BookReviewDetail.as_view(), name='bookreview-detail'),
    path('book-orders/', OrderList.as_view(), name='bookorder-list'),
    path('book-orders/<int:pk>/', OrderDetail.as_view(), name='bookorder-detail'),
    path('orders/', OrderList.as_view(), name='order-list'),
    path('orders/<int:pk>/', OrderDetail.as_view(), name='order-detail'),
    path('order-items/', OrderItemList.as_view(), name='orderitem-list'),
    path('order-items/<int:pk>/', OrderItemDetail.as_view(), name='orderitem-detail'),
    path('payments/', PaymentList.as_view(), name='payment-list'),
    path('payments/<int:pk>/', PaymentDetail.as_view(), name='payment-detail'),
    path('shippings/', ShippingList.as_view(), name='shipping-list'),
    path('shippings/<int:pk>/', ShippingDetail.as_view(), name='shipping-detail'),
]
