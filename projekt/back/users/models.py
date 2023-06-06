from django.db import models

from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    USER_TYPE_CHOICES = (
      ('p', 'parent'),
      ('c', 'child'),
      
  )
    user_type = models.CharField(max_length=1, choices=USER_TYPE_CHOICES,default='p',null=True,blank=True)

    def __str__(self):
        return self.username
    def isParent(self):
        return self.user_type
    def isUser(self,pk):
        return self.pk==pk