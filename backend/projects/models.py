from django.db import models

# Create your models here.


class Categories(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    project_url = models.URLField(max_length=200)
    github_url = models.URLField(max_length=200, null=True, blank=True)
    project_image = models.ImageField(upload_to='projects')
    categories = models.ManyToManyField(Categories, related_name='projects')

    def __str__(self):
        return self.title


class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=60)
    message = models.TextField()
    message_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
