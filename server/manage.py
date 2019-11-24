#!/usr/bin/env python
import os
import sys

if __name__ == '__main__':
<<<<<<< HEAD
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
=======
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
>>>>>>> 099650ac3b038aeef5dbca2b18b9b3b02e8275f1
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
