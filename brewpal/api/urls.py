from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    url(r'^beers$', views.Beers.as_view()),
    url(r'^beers/(?P<key>[0-9]+)$', views.BeerDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)