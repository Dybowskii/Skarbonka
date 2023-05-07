from django.db import models
from django.contrib.auth.models import User
class Skarbonka(models.Model):
    name = models.CharField(max_length=255)
    amount = models.FloatField()
    parent = models.ForeignKey(User , on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name
    def is_parent(self,user):
        return user==self.parent