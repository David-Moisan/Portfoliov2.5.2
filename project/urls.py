from django.urls import path
from .views import ProjectDetailView, ProjectListView

urlpatterns = [
    path('', ProjectListView),
    path('<int:project_id>/', ProjectDetailView),
]
