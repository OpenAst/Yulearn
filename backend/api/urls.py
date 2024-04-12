from django.urls import path, include
from .views import (ModuleRetrieveUpdateDestroyView,
CourseListView, CourseRetrieveUpdateDestroyView, 
ModuleListCreateView
)


urlpatterns = [
    #path('/', homepage, name='homepage'),
    #path('welcome/', welcome_email, name='welcome'),
    
    path('courses/', CourseListView.as_view(), name='course-list-create'),
    path('courses/<int:pk>/', CourseRetrieveUpdateDestroyView.as_view(), name='course-detail'),
    
    path('modules/', ModuleListCreateView.as_view(), name='module-list-create'),
    path('modules/<int:pk>/', ModuleRetrieveUpdateDestroyView.as_view()),
    
]
