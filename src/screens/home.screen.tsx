import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { cardStyle, commonStyles } from '../styles';
import { useGetPopularMovies } from '../hooks';
import { CardMovie } from '../components';

export function HomeScreen() {
  const { data } = useGetPopularMovies();

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.textHeading}>Popular Movies</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={cardStyle.movieCardContainer}
        data={data}
        renderItem={({ item }) => <CardMovie data={item} />}
      />
    </View>
  );
}
