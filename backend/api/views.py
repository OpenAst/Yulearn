from rest_framework import generics
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
# from django_filters.rest_framework import DjangoFilterBackend
from .models import Course, Module
from .serializers import CourseSerializer, ModuleSerializer, UserSerializer

class CreateUserView(generics.CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]

class CourseListView(generics.ListCreateAPIView):
  queryset = Course.objects.all()
  serializer_class = CourseSerializer
  permission_classes = [IsAuthenticated]
  search_fields = ['title', 'creator']
  
  def get_queryset(self):
    user = self.request.user
    return Course.objects.filter(creator=user)

    # Get the search query param from the request
    
    search_query = self.request.query_params.get('search', None)
    
    if search_query:
      queryset = queryset.filter(title__icontains=search_query) | queryset.filter(creator__icontains=search_query)
      
      
    

  
class CourseRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Module.objects.all()
  serializer_class = ModuleSerializer
  permission_classes = [IsAuthenticated]
  
class ModuleListCreateView(generics.ListCreateAPIView):
  queryset = Module.objects.all()
  serializer_class = ModuleSerializer
  permission_classes = [IsAuthenticated]
  
class ModuleRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Module.objects.all()
  serializer_class = ModuleSerializer
  permission_classes = [IsAuthenticated]
      
        