# Generated by Django 4.1.5 on 2023-01-20 07:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_contact'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='category',
        ),
        migrations.AddField(
            model_name='project',
            name='categories',
            field=models.ManyToManyField(related_name='projects', to='projects.categories'),
        ),
    ]
