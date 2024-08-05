import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { cardStyles, commonStyles } from '../styles';
import { useGetPopularMovies } from '../hooks';
import { CardMovie } from '../components';

export function HomeScreen() {
  const { data, isLoading } = useGetPopularMovies();

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View>
      <Text style={commonStyles.textHeading}>Popular Movies</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={cardStyles.movieCardContainer}
      >
        {(data || []).map(item => <CardMovie key={item.id} data={item} />)}
      </ScrollView>
    </View>
  );
}
