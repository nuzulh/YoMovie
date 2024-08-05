import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { cardStyles, commonStyles } from '../styles';
import { useFavoriteStore } from '../stores';
import { CardMovie } from '../components';

export function FavoritesScreen() {
  const favorites = useFavoriteStore(state => state.favorites);

  return (
    <View>
      <Text style={commonStyles.textHeading}>Your Favorite Movies</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={cardStyles.movieCardContainer}
      >
        {favorites.map(item => (
          <CardMovie key={item.id} data={{ ...item, isFavorite: true }} />
        ))}
      </ScrollView>
    </View>
  );
}
