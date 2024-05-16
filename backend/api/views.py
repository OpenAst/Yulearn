from rest_framework import generics
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import Course, Module, User, UserProfile
from .serializers import CourseSerializer, ModuleSerializer, UserSerializer, UserProfileSerializer
from .models import UserProfile
from django.shortcuts import get_object_or_404
from django.utils.crypto import get_random_string
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.response import Response 
from datetime import datetime, timedelta

class UserDataView(generics.RetrieveAPIView, generics.CreateAPIView):
  """
  View to retrieve user data
  """
  permission_classes = [IsAuthenticated]
  queryset = UserProfile.objects.all()
  serializer_class = UserProfileSerializer
  
  def post(self, request, *args, **kwargs):
    request = request.data
    serializer = self.get_serializer(request)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
  def get_object(self):
    return self.request.user
    
    
    
    
class CreateUserView(generics.CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
 

def welcome_email(request):
  return render(request, 'api/templates/welcome_email.html')
  
@csrf_exempt
def reset_password(request):
  if request.method == 'POST':
    email = request.POST.get("email")
    user = get_object_or_404(User, email=email)
    
    token= get_random_string(length=32)  
    user.profile.password_reset_token = token
    user.profile.password_reset_token = datetime.now() + timedelta(hours=1)
    
    reset_link = f"http://localhost:3000/reset-password/?token={token}"
    send_mail(
            "Password Reset Request",
            f"You are receiving this email because a password reset request was made for your account.\n\n"
            f"Please click on the following link to reset your password:\n\n{reset_link}\n\n"
            f"If you did not request this, please ignore this email and your password will remain unchanged.",
            "noreply@yourdomain.com",
            [email],
            fail_silently=False,
    )
    return JsonResponse("Password reset email sent successfully",safe=False)
  else:
    return JsonResponse("Method not allowed", status=405)
   
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
      
  def perform_create(self, serializer):
    if serializer.is_valid():
      serializer.save(creator=self.request.user)
    else:
      print(serializer.errors)
            
  
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
      
        