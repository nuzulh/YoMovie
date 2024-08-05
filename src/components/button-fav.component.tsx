import React from 'react';
import { Heart } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import { MovieMinimal, QUERY_KEY_MOVIE } from '../helpers';
import { cardStyles } from '../styles';
import { useFavoriteActions, useFavoriteStore } from '../stores';
import { useQueryClient } from 'react-query';

type Props = {
  data: MovieMinimal;
};

export function ButtonFav({ data }: Props) {
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
    <TouchableOpacity onPress={() => toggleFavorite(data)} style={cardStyles.buttonFavorite}>
      <Heart stroke='red' fill={data.isFavorite ? 'red' : ''} />
    </TouchableOpacity>
  );
}
