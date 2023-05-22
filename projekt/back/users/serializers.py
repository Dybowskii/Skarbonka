from allauth.account.adapter import get_adapter

from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from .models import User

class CustomRegisterSerializer(RegisterSerializer):
    user_type = serializers.ChoiceField(choices= User.USER_TYPE_CHOICES)
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'user_type',)

    # override get_cleaned_data of RegisterSerializer
    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'user_type': self.validated_data.get('user_type'),
            
        }
    

    # override save method of RegisterSerializer
    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.user_type = self.cleaned_data.get('user_type')

        user.save()
        adapter.save_user(request, user, self)
        return user
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk','username','email','user_type')
