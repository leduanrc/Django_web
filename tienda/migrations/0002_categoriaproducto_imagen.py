# Generated by Django 4.2.4 on 2024-03-10 01:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='categoriaproducto',
            name='imagen',
            field=models.ImageField(blank=True, null=True, upload_to='servicio'),
        ),
    ]
