# Generated by Django 4.1.7 on 2023-06-01 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skarbonka', '0004_skarbonka_child'),
    ]

    operations = [
        migrations.AddField(
            model_name='skarbonka',
            name='photo',
            field=models.ImageField(default=1, upload_to='images/'),
            preserve_default=False,
        ),
    ]