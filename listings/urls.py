from django.urls import path
from . import views
# the it directs the application to where the pages can be found


urlpatterns = [
    path('', views.index, name='listings'),
    path('<int:listing_id>', views.listing, name='listing'),
    path('search', views.search, name='search')
]
