from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *
# Register your models here.
admin.site.register(User)
admin.site.register(Author)
admin.site.register(Book)
admin.site.register(Post)
admin.site.register(Category)
admin.site.register(BookReview)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Payment)
admin.site.register(Shipping)
