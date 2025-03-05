from .models import product
from .serializer import productSerializer
from rest_framework import generics
class productList(generics.ListCreateAPIView):
    queryset = product.objects.all().order_by('-id')
    serializer_class = productSerializer
class productDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = product.objects.all()
    serializer_class = productSerializer
