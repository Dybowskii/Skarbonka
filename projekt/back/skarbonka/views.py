from django.shortcuts import render
from .models import Skarbonka
from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateAPIView,CreateAPIView,RetrieveUpdateDestroyAPIView
from .serializers import SkarbonkaCreateSerializer,SkarbonkaAddMoney,Skarbonka2Serializer,SkarbonkaRead,SkarbonkaChildView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied, ValidationError
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions
from .permissions import IsSkarbonkaParent,IsParent,IsChild,IsSkarbonkaChild
from users.models import User

class skarbonkiCreate(ListCreateAPIView):#wyświetlanie wszystkich skarbonek,dodawanie nowych
    permission_classes = [IsAuthenticated,IsParent]
    queryset = Skarbonka.objects.all()
    serializer_class = SkarbonkaCreateSerializer
    
    def perform_create(self, serializer):
        serializer.save(parent=self.request.user)



class ParentSkarbonki(ListAPIView):
    permission_classes = [IsAuthenticated,IsParent]
    serializer_class = SkarbonkaCreateSerializer
    def get_queryset(self):
        user = self.request.user
        return Skarbonka.objects.filter(parent=user)
class ParentSingleSkarbonka(RetrieveUpdateDestroyAPIView):#Wikod wplat do skarbonki
    queryset = Skarbonka.objects.all()
    permission_classes = [permissions.IsAuthenticated, IsSkarbonkaParent]
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return SkarbonkaRead
        else:
            return SkarbonkaAddMoney
    
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

# ChildViews

class ChildSkarbonki(ListAPIView):
    serializer_class =SkarbonkaChildView
    permission_classes = [IsAuthenticated,IsChild]
    def get_queryset(self):
        user = self.request.user
        return Skarbonka.objects.filter(child=user)

class ChildWithDraw(RetrieveUpdateAPIView):#Wikod wplat do skarbonki
    queryset = Skarbonka.objects.all()
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return SkarbonkaRead
        else:
            return SkarbonkaAddMoney
    permission_classes = [permissions.IsAuthenticated, IsSkarbonkaChild]
    def put (self,request,*args,**kwargs):
        Skarbonka = self.get_object()
        add = request.data.get('add',10)
        if add == '':
            raise ValidationError('No value add')
        if Skarbonka.amount - float(add) < 0:
            raise ValidationError('Price cannot be increased beyond 0 zł.')
        if float(add) < 0:
            raise ValidationError('no option to reduce the amount of money')
        
        Skarbonka.amount =Skarbonka.amount - float(add)
        Skarbonka.save()
        serializer = self.get_serializer(Skarbonka)
        return Response(serializer.data)
    