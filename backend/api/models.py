from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Course(models.Model):
  title = models.CharField(max_length=255)
  description = models.TextField()
  price = models.DecimalField(decimal_places=2, max_digits=10, default=0)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  creator = models.ForeignKey(User, on_delete=models.CASCADE)
  is_published = models.BooleanField(default=False)
  
  def __str__(self):
    return self.title
  
    
class Module(models.Model):
  title = models.CharField(max_length=100)
  content = models.TextField()
  course = models.ForeignKey(Course, on_delete=models.CASCADE)
  order = models.IntegerField()
  video_url = models.URLField(blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  
  def __str__(self):
    return self.title