from django.db import models

class Language(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=150)
    thumbnails = models.ImageField(upload_to="backup-photos")
    link = models.URLField()
    created_at = models.DateTimeField(auto_now=False, auto_now_add=False, auto_created=False)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    languages = models.ManyToManyField(Language, related_name="project_languages")
    content = models.TextField()
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title
    