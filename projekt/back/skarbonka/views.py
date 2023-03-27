from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
# Create your views here.
  
class ChildView(APIView):
    
    serializer_class = ChildSerializer
  
    def get(self, request):
        Dane = [ {"name": detail.name} 
        for detail in Child.objects.all()]
        
        
        return Response(Dane)