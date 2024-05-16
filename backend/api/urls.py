from django.urls import path, include
from .views import (ModuleRetrieveUpdateDestroyView,
CourseListView, CourseRetrieveUpdateDestroyView, UserDataView, ModuleListCreateView, welcome_email, reset_password
)


urlpatterns = [
    #path('/', homepage, name='homepage'),
    path('welcome-email/', welcome_email, name='welcome'),
    path('courses/', CourseListView.as_view(), name='course-list-create'),
    path('courses/<int:pk>/', CourseRetrieveUpdateDestroyView.as_view(), name='course-detail'),
    path('profile/', UserDataView.as_view(), name='user-profile'),
    path('modules/', ModuleListCreateView.as_view(), name='module-list-create'),
    path('modules/<int:pk>/', ModuleRetrieveUpdateDestroyView.as_view()),path('reset-password/', reset_password)
]
