from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from .models import Skarbonka

class SkarbonkaCreateSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Skarbonka
        fields = ('pk','name','amount','parent','child')
class SkarbonkaRead(serializers.ModelSerializer):
    add = serializers.DecimalField(max_digits=6, decimal_places=2, required=False)
    class Meta:
        model = Skarbonka
        fields = ('name','amount','parent','add')
class SkarbonkaAddMoney(serializers.ModelSerializer):
    add = serializers.DecimalField(max_digits=6, decimal_places=2, required=False)
    class Meta:
        model = Skarbonka
        fields = ('amount','add')

User = get_user_model()

class ChildUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username','email' ,'password', 'user_type')
        extra_kwargs = {
            'username': {'required': True},
        }

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], email=validated_data['email'],password=validated_data['password'], user_type='c')
        return user
class Skarbonka2Serializer(serializers.ModelSerializer):
    child = ChildUserSerializer(write_only = True)
    class Meta:
        model = Skarbonka
        fields = ('name','amount', 'parent', 'child')
    def create(self, validated_data):
        child_data=validated_data.pop('child')
        child = ChildUserSerializer().create(child_data)
        skarbonka = Skarbonka.objects.create(child=child,**validated_data)
        return skarbonka
class SkarbonkaChildView(serializers.ModelSerializer):
   
    class Meta:
        model = Skarbonka
        fields = ('pk','name','amount','parent')
