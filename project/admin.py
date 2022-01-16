from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Language, Project

@admin.register(Language)
class LanguageAdmin(admin.ModelAdmin):
    list_display = ['name']
    list_display_links = ['name']
    search_fields = ['name']
    
@admin.register(Project)
class ProjectAdmin(SummernoteModelAdmin):
    list_display = ['title', 'created_at']
    list_display_links = ['title']
    search_fields = ['title', 'languages', 'created_at']
    summernote_field = ('content', )