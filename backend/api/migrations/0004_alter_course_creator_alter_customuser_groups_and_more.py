# Generated by Django 5.0.1 on 2024-05-11 23:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_customuser'),
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='creator',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.customuser'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='groups',
            field=models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='custom_user_groups', to='auth.group', verbose_name='groups'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='custom_user_permissions', related_query_name='custom_user', to='auth.permission', verbose_name='user permissions'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.customuser'),
        ),
    ]
