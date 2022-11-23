from rest_framework.serializers import ModelSerializer
from .models import Project, Categories, Contact


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Categories
        fields = ['name']


class ProjectSerializer(ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'category', 'project_url',
                  'github_url', 'project_image']


class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'message', 'message_time']
