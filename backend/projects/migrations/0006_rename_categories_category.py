# Generated by Django 4.1.3 on 2023-01-22 09:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0005_remove_project_category_project_categories'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Categories',
            new_name='Category',
        ),
    ]
