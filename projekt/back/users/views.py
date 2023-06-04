
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from .permissions import Is_user
from .models import User
from dj_rest_auth.registration.views import RegisterView,ListAPIView
from rest_framework import permissions
from .serializers import CustomRegisterSerializer, UserSerializer,UserTypeSerializer,UserNameSerializer
from rest_framework.generics import ListAPIView,RetrieveUpdateDestroyAPIView

class CustomRegisterView(RegisterView):
    serializer_class = CustomRegisterSerializer
    permission_classes = [permissions.AllowAny]

class UserDetail(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(pk=user.pk)
class UserType(ListAPIView):
    serializer_class = UserTypeSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(pk=user.pk)
class UserNameChange(RetrieveUpdateDestroyAPIView):
    serializer_class = UserNameSerializer
    permission_classes = [IsAuthenticated,Is_user]
    queryset = User.objects.all()
