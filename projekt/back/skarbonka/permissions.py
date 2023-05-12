from rest_framework import permissions
from users.models import User

class IsSkarbonkaParent(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.is_parent(request.user)
    
class IsParent(permissions.BasePermission):
    def has_permission(self, request, view):
        user = request.user
        return user.is_authenticated and user.user_type == 'p'