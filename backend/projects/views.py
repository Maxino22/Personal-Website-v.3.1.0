from django.shortcuts import render

from rest_framework import response
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.generics import CreateAPIView
from .models import Project, Contact
from .serializers import ProjectSerializer, ContactSerializer


class ProjectViewSet(ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ContactApiView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
