# Generated by Django 4.1.3 on 2022-11-18 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_remove_categories_project_project_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=60)),
                ('message', models.TextField()),
                ('message_time', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
