# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf import settings
from django.db import models


# Create your models here.

class GrainType(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        db_table = "grain_types"


class Beer(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL)
    name = models.CharField(max_length=200)
    style = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    batch_size = models.FloatField()
    yeast = models.CharField(max_length=200)
    fermentation_temp = models.FloatField()

    class Meta:
        db_table = "beers"


class Grain(models.Model):
    grain_type = models.ForeignKey(GrainType)
    amount = models.FloatField()
    beer = models.ForeignKey(Beer, related_name='grains', on_delete=models.CASCADE)

    class Meta:
        db_table = "grains"


class Hop(models.Model):
    name = models.CharField(max_length=200)
    amount = models.FloatField()
    alpha_acid = models.FloatField()
    time = models.IntegerField()
    use = models.CharField(max_length=200)
    beer = models.ForeignKey(Beer, related_name='hops', on_delete=models.CASCADE)

    class Meta:
        db_table = "hops"
