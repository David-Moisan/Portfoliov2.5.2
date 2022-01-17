from rest_framework import serializers
from .models import BlogPost, Categories

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'
        
class BlogPostSerializer(serializers.ModelSerializer):
    category = CategoriesSerializer(many=True)
    
    class Meta:
        model = BlogPost
        fields = '__all__'
        lookup_field = 'slug'