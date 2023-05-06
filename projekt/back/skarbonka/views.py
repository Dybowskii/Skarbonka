from django.shortcuts import render
from .models import Skarbonka
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView,ListAPIView
from .serializers import SkarbonkaSerializer
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied, ValidationError
from rest_framework.permissions import IsAuthenticated

class skarbonki(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Skarbonka.objects.all()
    serializer_class = SkarbonkaSerializer