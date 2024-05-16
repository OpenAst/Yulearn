from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView, UserDataView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/token/', TokenObtainPairView.as_view(), name='token-obtain-pair'),
    
    path('api/token/refresh/', TokenRefreshView.as_view()),
    
    path('api/user/register/', CreateUserView.as_view()),
    path("api-auth/", include("rest_framework.urls")),
    
    path('api/', include('api.urls')),
    
]


