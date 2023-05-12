from django.shortcuts import render
from .models import Skarbonka
from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView,CreateAPIView
from .serializers import SkarbonkaCreateSerializer,SkarbonkaUpdateSerializer,Skarbonka2Serializer
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied, ValidationError
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions
from .permissions import IsSkarbonkaParent,IsParent
from users.models import User

class skarbonkiCreate(ListCreateAPIView):#wyświetlanie wszystkich skarbonek,dodawanie nowych
    permission_classes = [IsAuthenticated,IsParent]
    queryset = Skarbonka.objects.all()
    serializer_class = SkarbonkaCreateSerializer
    
    def perform_create(self, serializer,request):
        serializer.save(parent=self.request.user)



class ParentSkarbonki(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = SkarbonkaCreateSerializer
    def get_queryset(self):
        user = self.request.user
        return Skarbonka.objects.filter(parent=user)
class ParentSingleSkarbonka(RetrieveUpdateDestroyAPIView):
    queryset = Skarbonka.objects.all()
    serializer_class = SkarbonkaUpdateSerializer
    permission_classes = [permissions.IsAuthenticated, IsSkarbonkaParent]
    def put (self,request,*args,**kwargs):
        Skarbonka = self.get_object()
        add = request.data.get('add',10)
        if add == '':
            raise ValidationError('No value add')
        if float(add)+Skarbonka.amount > 999:
            raise ValidationError('Price cannot be increased beyond 999 zł.')
        if float(add) < 0:
            raise ValidationError('no option to reduce the amount of money')
        
        Skarbonka.amount =Skarbonka.amount + float(add)
        Skarbonka.save()
        serializer = self.get_serializer(Skarbonka)
        return Response(serializer.data)

# Testy:

class Skarbonek(CreateAPIView):
    serializer_class = Skarbonka2Serializer
    permission_classes = [IsAuthenticated,IsParent]