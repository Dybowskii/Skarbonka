from rest_framework import serializers
from .models import Skarbonka

class SkarbonkaSerializer(serializers.ModelSerializer):
    add = serializers.IntegerField(write_only=True, required=False)
    class Meta:
        model = Skarbonka
        fields = ('pk','name','amount','parent','add')