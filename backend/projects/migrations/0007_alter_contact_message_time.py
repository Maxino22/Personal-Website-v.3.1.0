# Generated by Django 4.1.3 on 2023-01-28 07:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0006_rename_categories_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='message_time',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]