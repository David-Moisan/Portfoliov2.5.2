from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Language, Project
from .serializers import LanguageSerializer, ProjectSerializer

@api_view(['GET'])
def ProjectListView(request, *args, **kwargs):
    queryset = Project.objects.all()
    serializer = ProjectSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def ProjectDetailView(request, project_id, *args, **kwargs):
    queryset = Project.objects.filter(id=project_id)
    if not queryset.exists():
        return Response({"Bad request ! this project don't exist"}, status=status.HTTP_400_BAD_REQUEST)
    obj = queryset.first()
    serializer = ProjectSerializer(obj)
    
    return Response(serializer.data, status=status.HTTP_200_OK)