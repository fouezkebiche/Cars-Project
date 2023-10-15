from django.conf import settings
from django.conf.urls.static import static
from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.home,name="home"),
    path('contact_us_form/', views.contact_us_form, name='contact_us_form'),
    path('',views.main,name="main"),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)