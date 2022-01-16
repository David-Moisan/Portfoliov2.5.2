from rest_framework import serializers
from .models import Project, Language

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'
        
class ProjectSerializer(serializers.ModelSerializer):
    languages = LanguageSerializer(many=True)
    class Meta: 
        model = Project
        fields = '__all__'