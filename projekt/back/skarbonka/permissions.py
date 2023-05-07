from rest_framework import permissions

class IsSkarbonkaParent(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.is_parent(request.user)