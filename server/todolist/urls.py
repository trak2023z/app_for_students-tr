from django.urls import path
from .views import get_todolists, create_todolist, doned_todolist

urlpatterns = [ 
    path('todolists/<int:subject_id>/', get_todolists, name='get_todolists'),
    path('todolists/create/<int:subject_id>/', create_todolist, name='create_todolist'),
    path('todolists/doned/<int:subject_id>/<int:list_id>/', doned_todolist,  name='doned_todolist'),
    #path('todolists/delete/', delete_todolist, name='delete_todolist'),
    #path('todolists/update/', update_todolist, name='update_todolist'),
]