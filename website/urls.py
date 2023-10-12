from django.urls import path,include
from . import views

urlpatterns = [
    path('home/',views.home,name="home"),
    path('contact_us_form/', views.contact_us_form, name='contact_us_form'),
    path('',views.main,name="main"),
]
