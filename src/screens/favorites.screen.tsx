import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { cardStyle, commonStyles } from '../styles';
import { useFavoriteStore } from '../stores';
import { CardMovie } from '../components';

export function FavoritesScreen() {
  const favorites = useFavoriteStore(state => state.favorites);

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.textHeading}>Your Favorite Movies</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={cardStyle.movieCardContainer}
        data={favorites}
        renderItem={({ item }) => <CardMovie data={{ ...item, isFavorite: true }} />}
      />
    </View>
  );
}
