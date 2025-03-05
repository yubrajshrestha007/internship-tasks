from django.urls import path
from .views import productList, productDetail

urlpatterns = [
    path('products/', productList.as_view(), name='product-list'),
    path('products/<int:pk>/', productDetail.as_view(), name='product-detail'),
    path('products/<int:pk>/', productDetail.as_view(), name='product-detail'),
]
