from django.urls import path
from .views import CustomRegisterView
from dj_rest_auth.views import LoginView,LogoutView,PasswordChangeView
from rest_framework_simplejwt.views import TokenVerifyView
from dj_rest_auth.jwt_auth import get_refresh_view
urlpatterns = [
    path('register/', CustomRegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('change/', PasswordChangeView.as_view()),
]