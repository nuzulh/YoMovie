import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { cardStyles, commonStyles } from '../styles';
import { useGetPopularMovies, useGetTodayTrendingMovies } from '../hooks';
import { CardMovie } from '../components';

export function HomeScreen() {
  const {
    data: popularData,
    isLoading: popularLoading,
  } = useGetPopularMovies();
  const {
    data: trendingData,
    isLoading: trendingLoading,
  } = useGetTodayTrendingMovies();

  if (popularLoading || trendingLoading) return <Text>Loading...</Text>;

  return (
    <ScrollView>
      <Text style={commonStyles.textHeading}>Popular Movies</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={cardStyles.movieCardContainer}
      >
        {popularData?.map(item => <CardMovie key={item.id} data={item} />)}
      </ScrollView>

      <Text style={commonStyles.textHeading}>Today's Trending Movies</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={cardStyles.movieCardContainer}
      >
        {trendingData?.map(item => <CardMovie key={item.id} data={item} />)}
      </ScrollView>
    </ScrollView>
  );
}
