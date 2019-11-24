from django.conf.urls import url
from django.urls import path, include
from .views import *

urlpatterns = [
<<<<<<< HEAD

    url(r'^api/users/', UserListView.as_view(), name='view-all'),

=======
    path('', UserListView.as_view(), name='view-all'),
    path('login/', UserLogin.as_view(), name='login'),
    path('register/', UserRegister.as_view(), name='register'),
    path('get_profile/', UserListView.as_view(), name='get_profile')
>>>>>>> 099650ac3b038aeef5dbca2b18b9b3b02e8275f1
]
