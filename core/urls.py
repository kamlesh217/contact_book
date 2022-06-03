from django.urls import path
from . import views

urlpatterns = [
    path("", views.Dashboard, name="Dashboard"),
    path("form/",views.form, name="form"),
    path("get_data/<int:user_id>/", views.get_data, name="get_data")
]
