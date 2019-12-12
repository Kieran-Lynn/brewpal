# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from models import Beer

from api.serializers import BeerSerializer


class Beers(APIView):
    def post(self, request):
        beerSerializer = BeerSerializer(data=request.data, context={'request': request})
        print(request.data)
        if beerSerializer.is_valid():
            beerSerializer.create(request.data)
            return Response({}, status=status.HTTP_201_CREATED)

        return Response(beerSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        beers = Beer.objects.all()
        serializer = BeerSerializer(beers, many=True, context={'request': request})

        return Response(serializer.data)


class BeerDetail(APIView):
    def get(self, request, key):
        return Response("hit")
