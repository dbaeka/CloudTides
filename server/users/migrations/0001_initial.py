<<<<<<< HEAD
# Generated by Django 2.1 on 2019-10-16 16:57
=======
# Generated by Django 2.1 on 2019-11-24 07:48
>>>>>>> 099650ac3b038aeef5dbca2b18b9b3b02e8275f1

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
<<<<<<< HEAD
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
=======
        ('auth', '0009_alter_user_last_name_max_length'),
>>>>>>> 099650ac3b038aeef5dbca2b18b9b3b02e8275f1
    ]

    operations = [
        migrations.CreateModel(
<<<<<<< HEAD
            name='vCenter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hostURL', models.URLField(max_length=150)),
                ('company_name', models.CharField(max_length=300)),
                ('user', models.OneToOneField(blank=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'vCenter',
                'verbose_name_plural': 'vCenters',
=======
            name='Account',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('company_name', models.CharField(max_length=200)),
                ('priority', models.CharField(choices=[('1', 'Low'), ('2', 'Medium'), ('3', 'High')], default='Low', max_length=10)),
            ],
            options={
                'verbose_name': 'Tides Account',
                'verbose_name_plural': 'Tides Account',
>>>>>>> 099650ac3b038aeef5dbca2b18b9b3b02e8275f1
            },
        ),
    ]
