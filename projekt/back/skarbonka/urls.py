from django.urls import path
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView, LogoutView, PasswordChangeView

from . import views

urlpatterns = [

    path('all/', views.skarbonkiCreate.as_view()), #wyszstkie skarbonki
    path('my/', views.ParentSkarbonki.as_view()), #wszystkie skarbonki danego rodzica
    path('my/<int:pk>', views.ParentSkarbonki.as_view()),#dokładny widok skarbonki
    path('add_money/<int:pk>', views.ParentSingleSkarbonka.as_view()), #wplacanie pieniedzy
    path('add_skarbonka/', views.Skarbonek.as_view()),#dodawanie skarbonek
    path('child/my', views.ChildSkarbonki.as_view()),#skarbonki danego dziecka
    path('child/my/<int:pk>', views.ChildWithDraw.as_view()),#skarbonki danego dziecka

    


    

]
