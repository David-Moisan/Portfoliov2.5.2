from django.contrib import admin
from .models import BlogPost, Categories
from django_summernote.admin import SummernoteModelAdmin
@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name', 'color']
    
@admin.register(BlogPost)
class BlogPostAdmin(SummernoteModelAdmin):
    exclude = ['slug']
    list_display = ['title', 'created_at']
    list_display_links = ['title']
    search_fields = ['title', 'created_at', 'category']
    list_per_page = 25   
    summernote_fields = ('content',)

