from django.db import models
from django.contrib.auth.models import User


# Create your models here.

<<<<<<< HEAD
class vCenter(models.Model):
    # DATABASE FIELDS
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True)
    hostURL = models.URLField(max_length=150)
    company_name = models.CharField(max_length=300)

    # META CLASS
    class Meta:
        verbose_name = 'vCenter'
        verbose_name_plural = 'vCenters'

    # TO STRING METHOD
    def __str__(self):
        return str(self.company_name) + "-" + str(self.hostURL)
=======
class Account(models.Model):
    PRI_CHOICES = (
        ('1', 'Low'),
        ('2', 'Medium'),
        ('3', 'High')
    )
    # DATABASE FIELDS
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    company_name = models.CharField(max_length=200)
    priority = models.CharField(max_length=10, choices=PRI_CHOICES, default='Low')

    # META CLASS
    class Meta:
        verbose_name = 'Tides Account'
        verbose_name_plural = 'Tides Account'

    # TO STRING METHOD
    def __str__(self):
        return str(self.priority)
>>>>>>> 099650ac3b038aeef5dbca2b18b9b3b02e8275f1

    # SAVE METHOD
    def save(self, *args, **kwargs):
        # do something
        super().save(*args, **kwargs)
        # do something
