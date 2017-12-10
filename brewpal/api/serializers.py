from rest_framework import serializers
from api.models import Beer, Grain, GrainType, Hop


class HopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hop
        fields = ('name',
                  'amount',
                  'alpha_acid',
                  'time',
                  'use')


class GrainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grain
        fields = ('amount', 'grain_type')


class BeerSerializer(serializers.ModelSerializer):
    grains = GrainSerializer(many=True)
    hops = HopSerializer(many=True)
    owner = serializers.PrimaryKeyRelatedField(
        read_only=True,
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Beer
        fields = ('id',
                  'owner',
                  'name',
                  'style',
                  'description',
                  'batch_size',
                  'yeast',
                  'fermentation_temp',
                  'grains',
                  'hops')

    def create(self, validated_data):
        grains_data = validated_data.pop('grains')
        hops_data = validated_data.pop('hops')
        validated_data['owner'] = self.context['request'].user
        beer = Beer.objects.create(**validated_data)
        for item in grains_data:
            grainType = GrainType.objects.filter(pk=item['grain_type']).first()
            Grain.objects.create(beer=beer, grain_type=grainType, amount=item['amount'])
        for hop in hops_data:
            Hop.objects.create(
                beer=beer,
                name=hop['name'],
                amount=hop['amount'],
                alpha_acid=hop['alpha_acid'],
                time=hop['time'],
                use=hop['use']
            )

        return beer
