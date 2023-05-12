from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
class Skarbonka(models.Model):
    name = models.CharField(max_length=255)
    amount = models.FloatField()
    parent = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete=models.CASCADE)
    child = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='child')
    

    def __str__(self) -> str:
        return self.name
    def is_parent(self,user):
        return user==self.parent