# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from import_export.admin import ImportExportModelAdmin
from django.contrib import admin
from .models import *
<<<<<<< HEAD
from import_export import resources
=======
>>>>>>> 099650ac3b038aeef5dbca2b18b9b3b02e8275f1


# Register your models here.

<<<<<<< HEAD
@admin.register(vCenter)
class vCenterAdmin(ImportExportModelAdmin):
=======
@admin.register(Account)
class AccountAdmin(ImportExportModelAdmin):
>>>>>>> 099650ac3b038aeef5dbca2b18b9b3b02e8275f1
    pass
