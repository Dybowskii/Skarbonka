from .models import User
from rest_framework import permissions

class Is_user(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.isUser(request.user.pk)