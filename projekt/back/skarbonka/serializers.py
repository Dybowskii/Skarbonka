from rest_framework import serializers
from .models import Skarbonka

class SkarbonkaCreateSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Skarbonka
        fields = ('name','amount','parent')
class SkarbonkaUpdateSerializer(serializers.ModelSerializer):
    add = serializers.DecimalField(max_digits=6, decimal_places=2, required=False)
    class Meta:
        model = Skarbonka
        fields = ('name','amount','parent','add')