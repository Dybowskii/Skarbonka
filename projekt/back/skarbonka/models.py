from typing import Any, Dict, Tuple
from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.core.files import File
from django.core.files.base import ContentFile
def get_default_image():
    # Funkcja zwracająca domyślny obrazek
    # Możesz dostosować ścieżkę do swojego domyślnego obrazka
        return "media/images/jeremy-mcknight-11GZVrMzfUU-unsplash.jpg"

class Skarbonka(models.Model):
    name = models.CharField(max_length=255)
    amount = models.FloatField()
    parent = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete=models.CASCADE)
    child = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='child')
    photo = models.ImageField(upload_to='images/',default="images/user.jpg",null=True)
    

    def __str__(self) -> str:
        return self.name
    def is_parent(self,user):
        return user==self.parent
    def is_child(self,user):
        return user==self.child
    def delete(self):
        if self.child:
            self.child.delete()
        super(Skarbonka, self).delete() 
    
    def save(self, *args, **kwargs):
        if not self.photo:
            default_photo_path = get_default_image()
            default_photo_file = open(default_photo_path, 'rb')
            file_name = default_photo_path.split('/')[-1]
            content = ContentFile(default_photo_file.read())
            self.photo.save(file_name, content, save=False)
            default_photo_file.close()
        super().save(*args, **kwargs)
@receiver(models.signals.post_delete, sender=Skarbonka)
def handle_deleted_profile(sender, instance, **kwargs):
     if instance.child:
        instance.child.delete()