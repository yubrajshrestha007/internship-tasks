from .views import *
from django.urls import path
from rest_framework.routers import DefaultRouter

urlpatterns = [
    # path('login/' , login_user  ,name='login-user'),
    # path('register/' , register_user  ,name='register-user'),
    path('books/', BookView.as_view(), name='book-list'),
    path('books/<int:pk>/', BookViewDetails.as_view(), name='book-detail'),

    path('authors/', AuthorView.as_view(), name='author-list'),
    path('authors/<int:pk>/', AuthorViewDetails.as_view(), name='author-detail'),

    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),

    path('posts/', PostList.as_view(), name='post-list'),
    path('posts/<int:pk>/', PostDetail.as_view(), name='post-detail'),

    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),

    path('book-reviews/', BookReviewList.as_view(), name='bookreview-list'),
    path('book-reviews/<int:pk>/', BookReviewDetail.as_view(), name='bookreview-detail'),
    path('shippings/', shipping_list, name='shipping-list'),
]

router = DefaultRouter()
router.register(r'orders', OrderList)
router.register(r'order-items', OrderItemList)
router.register(r'payments', PaymentList)

urlpatterns += router.urls
