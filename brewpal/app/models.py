# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.conf import settings


# Create your models here.

class Beer(models.Model):
    name = models.CharField(max_length=200)
    abv = models.FloatField()
    style = models.CharField(max_length=200)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL)

    class Meta:
        db_table = "beers"
