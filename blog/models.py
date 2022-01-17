from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify

class Categories(models.Model):
    name = models.CharField(max_length=50, unique=True)
    color = models.CharField(max_length=7) # /#221a1a
    
    def __str__(self):
        return self.name
    
class BlogPost(models.Model):
    title = models.CharField(max_length=50, unique=True)
    slug = models.SlugField()
    category = models.ManyToManyField(Categories, related_name="blog_categories")
    thumbnails = models.ImageField(upload_to="photos/%Y/%m/%d/")
    description = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    content = models.TextField()
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    
    class Meta:
        ordering = ['-created_at']
        
    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()
        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()
        self.slug = slug 
        
        super(BlogPost, self).save(*args, **kwargs)
        
    def __str__(self):
        return self.title