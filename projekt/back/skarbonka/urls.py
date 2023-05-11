from django.urls import path
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView, LogoutView, PasswordChangeView

from . import views

urlpatterns = [

    path('skarbonka/', views.skarbonkiCreate.as_view()),
    path('my/', views.ParentSkarbonki.as_view()),
    path('my/<int:pk>', views.ParentSingleSkarbonka.as_view()),

    

]
