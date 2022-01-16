# Generated by Django 4.0.1 on 2022-01-16 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, unique=True)),
                ('description', models.CharField(max_length=150)),
                ('thumbnails', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('link', models.URLField()),
                ('created_at', models.DateTimeField()),
                ('month', models.CharField(max_length=3)),
                ('day', models.CharField(max_length=2)),
                ('content', models.TextField()),
                ('languages', models.ManyToManyField(related_name='project_languages', to='project.Language')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]
