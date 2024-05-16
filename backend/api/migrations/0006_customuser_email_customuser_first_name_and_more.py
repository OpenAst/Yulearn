# Generated by Django 5.0.1 on 2024-05-12 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_customuser_email_remove_customuser_first_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='email',
            field=models.EmailField(default='isrealcrack@gmail.com', max_length=254, unique=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='first_name',
            field=models.CharField(default='Israel', max_length=50),
        ),
        migrations.AddField(
            model_name='customuser',
            name='last_name',
            field=models.CharField(default='Crack', max_length=50),
        ),
        migrations.AddField(
            model_name='customuser',
            name='password',
            field=models.CharField(default='homenow123', max_length=125),
        ),
        migrations.AddField(
            model_name='customuser',
            name='username',
            field=models.CharField(default='welcome124', max_length=50),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
