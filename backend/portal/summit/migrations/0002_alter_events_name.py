# Generated by Django 5.0 on 2023-12-18 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('summit', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]