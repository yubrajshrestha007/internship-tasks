from rest_framework import serializers
from .models import *


class AuthorSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=200)
    bio = serializers.CharField()
    email = serializers.EmailField()
    address = serializers.CharField(max_length=200)
    phone = serializers.CharField(max_length=20)
    def create(self, validated_data):
        return Author.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.bio = validated_data.get('bio', instance.bio)
        instance.email = validated_data.get('email', instance.email)
        instance.address = validated_data.get('address', instance.address)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.save()
        return instance

class UserSerializer(serializers.Serializer):
    username=serializers.CharField(max_length=200)
    email=serializers.EmailField()
    password=serializers.CharField(max_length=200)
    created_at=serializers.DateTimeField()
    updated_at=serializers.DateTimeField()
    def create(self, validated_data):
        return User.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.password = validated_data.get('password', instance.password)
        instance.created_at = validated_data.get('created_at', instance.created_at)
        instance.updated_at = validated_data.get('updated_at', instance.updated_at)
        instance.save()
        return instance

class PostSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=200)
    content = serializers.CharField()
    author = serializers.PrimaryKeyRelatedField(queryset=Author.objects.all())
    def create(self, validated_data):
        return Post.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.author = validated_data.get('author', instance.author)
        instance.save()
        return instance

class CategorySerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=200)
    def create(self, validated_data):
        return Category.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class BookSerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    author_id = serializers.PrimaryKeyRelatedField(queryset=Author.objects.all(), source="author")
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source="category")
    author = AuthorSerializer(read_only=True)
    category = CategorySerializer(read_only=True)
    title = serializers.CharField(max_length=200)
    description = serializers.CharField()
    book_quantity=serializers.IntegerField()
    publication_date = serializers.DateField()
    price = serializers.DecimalField(max_digits=10, decimal_places=2)
    def create(self, validated_data):
        return Book.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get("title", instance.title)
        instance.publication_date = validated_data.get("publication_date", instance.publication_date)
        instance.price = validated_data.get("price", instance.price)
        instance.description = validated_data.get("description", instance.description)
        instance.book_quantity = validated_data.get("book_quantity", instance.book_quantity)
        if "author" in validated_data:
            instance.author = validated_data["author"]
        if "category" in validated_data:
            instance.category = validated_data["category"]
        instance.save()
        return instance
class BookReviewSerializer(serializers.Serializer):
    book = serializers.PrimaryKeyRelatedField(queryset=Book.objects.all())
    user= serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    review = serializers.CharField()
    rating = serializers.IntegerField()
    def create(self, validated_data):
        return BookReview.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.review = validated_data.get('review', instance.review)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.save()
        return instance

class OrderSerializer(serializers.Serializer):
    user= serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    order_date=serializers.DateTimeField()
    total=serializers.DecimalField(max_digits=10, decimal_places=2)
    def create(self, validated_data):
        return Order.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.user = validated_data.get('user', instance.user)
        instance.order_date = validated_data.get('order_date', instance.order_date)
        instance.total = validated_data.get('total', instance.total)
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance

class OrderItemSerializer(serializers.Serializer):
    order= serializers.PrimaryKeyRelatedField(queryset=Order.objects.all())
    book= serializers.PrimaryKeyRelatedField(queryset=Book.objects.all())
    quantity=serializers.IntegerField()
    price=serializers.DecimalField(max_digits=10, decimal_places=2)
    def create(self, validated_data):
        return OrderItem.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.order = validated_data.get('order', instance.order)
        instance.book = validated_data.get('book', instance.book)
        instance.quantity = validated_data.get('quantity', instance.quantity)
        instance.price = validated_data.get('price', instance.price)
        instance.save()
        return instance


class PaymentSerializer(serializers.Serializer):
    order= serializers.PrimaryKeyRelatedField(queryset=Order.objects.all())
    payment_date=serializers.DateTimeField()
    payment_method=serializers.ChoiceField(choices=PAYMENT_METHODS,default='Paypal')
    amount=serializers.DecimalField(max_digits=10, decimal_places=2)
    def create(self, validated_data):
        return Payment.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.order = validated_data.get('order', instance.order)
        instance.payment_date = validated_data.get('payment_date', instance.payment_date)
        instance.payment_method = validated_data.get('payment_method', instance.payment_date)
        instance.amount = validated_data.get('amount', instance.amount)
        instance.save()
        return instance

class ShippingSerializer(serializers.Serializer):
    order= serializers.PrimaryKeyRelatedField(queryset=Order.objects.all())
    shipping_date=serializers.DateTimeField()
    shipping_method=serializers.ChoiceField(choices=SHIPPING_METHODS)
    shipping_address=serializers.CharField(max_length=100)
    def create(self, validated_data):
        return Shipping.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.order = validated_data.get('order', instance.order)
        instance.shipping_date= validated_data.get('shipping_date', instance.shipping_date)
        instance.shipping_method = validated_data.get('shipping_method', instance.shipping_method)
        instance.shipping_address = validated_data.get('shipping_address', instance.shipping_address)
        instance.save()
        return instance


# class RegisterSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True)

#     class Meta:
#         model = User
#         fields = ['username', 'email', 'address', 'password', 'is_employer']

#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         return user
