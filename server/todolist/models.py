from django.db import models
from subject.models import Subject
from django.contrib.auth import get_user_model

User = get_user_model()

class Todolist(models.Model):
    description = models.CharField(max_length=1000)
    isDoned = models.BooleanField(default=False)
    subject = models.ForeignKey(Subject, related_name='subject_todolist', on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, related_name='todolist_create', on_delete=models.CASCADE)