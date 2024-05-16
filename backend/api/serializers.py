from rest_framework import serializers
from .models import Course, Module, UserProfile, User
from django.contrib.auth.models import User
from rest_framework.validators import UniqueTogetherValidator

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'first_name', 'last_name', 'email', 'password', 'username']
    extra_kwargs = {"password": {"write_only": True}
                    }
    
  def create(self, validated_data):
    user = User.objects.create_user(**validated_data)
    return user

class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserProfile
    fields = ['bio', 'phone_number', 'birth_date', 'email', 'password', 'first_name', 'last_name']
        
class ModuleSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Module
    fields = ['title', 'id', 'course', 'content', 'order', 'video_url', 'description', 'created_at', 'updated_at', 'creator', 'is_published'                          ]
    read_only_fields = ['id', 'created_at', 'updated_at']

class CourseSerializer(serializers.ModelSerializer):
  
  modules = ModuleSerializer(many=True, read_only=True)
  
  class Meta:
    model = Course
    fields = ['title', 'id', 'price', 'description', 'lessons', 'created_at', 'updated_at', 'creator', 'is_published']
    read_only_fields = ['id', 'created_at', 'updated_at', 'creator', 'lessons']
    
      
    