# Generated by Django 5.0.1 on 2024-05-12 00:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_course_creator_alter_customuser_groups_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='email',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='password',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='username',
        ),
    ]
