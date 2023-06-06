from django.urls import path
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView, LogoutView, PasswordChangeView
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [

    path('all/', views.skarbonkiCreate.as_view()), #wyszstkie skarbonki
    path('parent/', views.ParentSkarbonki.as_view()), #wszystkie skarbonki danego rodzica
    path('parent/<int:pk>', views.ParentSkarbonki2.as_view()),#dokładny widok skarbonki
    path('parent/add/<int:pk>', views.ParentSingleSkarbonka.as_view()), #wplacanie pieniedzy
    path('parent/photo/<int:pk>', views.changePhoto.as_view()), #wplacanie pieniedzy
    path('parent/new', views.Skarbonek.as_view()),#dodawanie skarbonek
    path('child/', views.ChildSkarbonki.as_view()),#skarbonki danego dziecka
    path('child/<int:pk>', views.ChildWithDraw.as_view()),#skarbonki danego dziecka

    
    

]+ static(r'^$/images/', document_root = settings.MEDIA_URL)
