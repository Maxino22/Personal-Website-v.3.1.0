from rest_framework.serializers import ModelSerializer
from .models import Project, Category, Contact
from rest_framework import serializers


class ProjectSerializer(ModelSerializer):
    categories = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'categories', 'project_url',
                  'github_url', 'project_image']


class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'message', 'message_time']
