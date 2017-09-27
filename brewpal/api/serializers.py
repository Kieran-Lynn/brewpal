from rest_framework import serializers
from api.models import Beer, Grain, GrainType


class GrainTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrainType


class GrainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grain
        fields = ('amount', 'grain_type')


class BeerSerializer(serializers.ModelSerializer):
    grains = GrainSerializer(many=True)
    owner = serializers.PrimaryKeyRelatedField(
        read_only=True,
        default=serializers.CurrentUserDefault()
    )
    # hops = serializers.StringRelatedField(many=True)

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
                  'grains')
        # 'hops')

    def create(self, validated_data):
        grains_data = validated_data.pop('grains')
        validated_data['owner'] = self.context['request'].user
        beer = Beer.objects.create(**validated_data)
        for item in grains_data:
            grainType = GrainType.objects.filter(pk=item['grain_type']).first()
            grain = Grain(beer=beer, grain_type=grainType, amount=item['amount'])
            grain.save()

        return beer
