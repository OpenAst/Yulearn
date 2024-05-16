from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class UserProfile(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  bio = models.TextField(blank=True)
  phone_number  = models.CharField(max_length=11, null=True)    
  birth_date = models.DateField(null=True, blank=True)
  email = models.EmailField(null=True, max_length=254, verbose_name='Email Address')
  password = models.CharField(max_length=50, null=True)
  last_name = models.CharField(max_length=255, null=True)
  first_name = models.CharField(max_length=255, null=True)
  

@receiver(post_save, sender=User)    
def create_user_profile(sender, instance, created, **kwargs):
  if created:
    UserProfile.objects.create(user=instance)
    
@receiver(post_save, sender=User)    
def save_user_profile(sender,  instance, **kwargs):
  instance.userprofile.save()  
      
class Course(models.Model):
  title = models.CharField(max_length=255)
  description = models.TextField()
  price = models.DecimalField(decimal_places=2, max_digits=10, default=0)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  creator = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
  is_published = models.BooleanField(default=False)
  
  def __str__(self):
    return self.title
  
    
class Module(models.Model):
  title = models.CharField(max_length=100)
  content = models.TextField()
  course = models.ForeignKey(Course, on_delete=models.CASCADE)
  order = models.IntegerField(1)
  video_url = models.URLField(blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  
  def __str__(self):
    return self.title



