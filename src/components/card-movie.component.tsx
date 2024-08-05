import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { cardStyle } from '../styles/card.style';
import { useAppNavigation } from '../hooks';
import { parseRating, QUERY_KEY_MOVIE, SHARED_STACKS } from '../helpers';
import { useFavoriteActions, useFavoriteStore } from '../stores';
import { useQueryClient } from 'react-query';
import { Heart } from 'lucide-react-native';

type Props = {
  data: {
    id: number;
    title: string;
    imageUrl: string;
    rating: number;
    createdAt: string;
    isFavorite: boolean;
  };
};

export function CardMovie({ data }: Props) {
  const { navigate } = useAppNavigation();
  const favorites = useFavoriteStore(state => state.favorites);
  const { add, remove } = useFavoriteActions();
  const queryClient = useQueryClient();

  const toggleFavorite = (item: Props['data']) => {
    const favoriteIds = favorites.map(x => x.id);

    if (favoriteIds.includes(item.id)) remove(item.id);
    else add(item);

    queryClient.invalidateQueries({ queryKey: QUERY_KEY_MOVIE.GET });
  };

  return (
    <TouchableOpacity
      key={data.id}
      style={cardStyle.movieCard}
      onPress={() => navigate(SHARED_STACKS.MOVIE_DETAILS_SCREEN)}
    >
      <Image
        source={{ uri: data.imageUrl }}
        resizeMode="cover"
        style={cardStyle.movieCardImage}
        alt=""
      />
      <View style={cardStyle.movieCardContent}>
        <Text>{parseRating(data.rating)} / 10</Text>
        <Text style={cardStyle.textTitle} numberOfLines={2}>
          {data.title}
        </Text>
      </View>
      <TouchableOpacity onPress={() => toggleFavorite(data)} style={cardStyle.buttonFavorite}>
        <Heart stroke='red' fill={data.isFavorite ? 'red' : ''} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
