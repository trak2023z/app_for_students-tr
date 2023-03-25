from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Todolist
from .serializers import TodolistSerializer
from subject.models import Subject

@api_view(['GET'])
def get_todolists(request, subject_id):
    subject = Subject.objects.filter(id=subject_id).first()
    todolists = Todolist.objects.filter(subject=subject).order_by('-id')
    serializer = TodolistSerializer(todolists, many=True)
    return Response({"results":serializer.data})

@api_view(['POST'])
def create_todolist(request, subject_id):
    subject = Subject.objects.filter(id=subject_id).first()
    serializer = TodolistSerializer(data=request.data)
    print(serializer)
    if serializer.is_valid():
        serializer.save(created_by=request.user, subject=subject)
        return Response({'message':'Create'})


@api_view(['PATCH'])
def doned_todolist(request, subject_id, list_id):
    subject = Subject.objects.filter(id=subject_id).first()
    todolists = Todolist.objects.get(id=list_id, subject=subject)
    serializer = TodolistSerializer(todolists, data={'isDoned':True,'description':todolists.description})
    if serializer.is_valid():
        serializer.save(created_by=request.user, subject=subject)
        return Response({'message':'Doned'})
