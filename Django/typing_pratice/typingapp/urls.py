from django.contrib import admin
from django.urls import include, path
urlpatterns = [
 path("homepage/", include("typingapp.urls")),
 path("admin/", admin.site.urls),


]

