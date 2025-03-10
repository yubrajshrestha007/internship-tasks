from django.contrib import admin
from .models import *

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email')
    search_fields = ('username', 'email')

class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name', 'email')
    search_fields = ('name', 'email')

class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'price')
    search_fields = ('title', 'author__name', 'price')

class BookReviewAdmin(admin.ModelAdmin):
    list_display = ('book', 'rating', 'review')
    search_fields = ('book__title', 'rating', 'review')

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title', 'created_at')

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'order_date', 'status')
    search_fields = ('id', 'order_date', 'status')

class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'book', 'quantity')
    search_fields = ('order__id', 'book__title', 'quantity')

class PaymentAdmin(admin.ModelAdmin):
    list_display = ('order', 'payment_method', 'amount')
    search_fields = ('order__id', 'payment_method__name', 'amount')

class ShippingAdmin(admin.ModelAdmin):
    list_display = ('order', 'shipping_method', 'shipping_address')
    search_fields = ('order__id', 'shipping_method__name', 'shipping_address')

# Register models with custom ModelAdmin classes
admin.site.register(User, UserAdmin)
admin.site.register(Author, AuthorAdmin)
admin.site.register(Book, BookAdmin)
admin.site.register(BookReview, BookReviewAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(Payment, PaymentAdmin)
admin.site.register(Shipping, ShippingAdmin)
