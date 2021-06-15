from django.urls import path
# from django.contrib.staticfiles import staticfiles_urlpatterns
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about')
]

# from the view.py in the same field it was able to import the methods
# to publish the html pages f