import React from 'react';
import { RefreshControl, ScrollView, Text } from 'react-native';
import { cardStyles, commonStyles } from '../styles';
import { useGetPopularMovies, useGetTodayTrendingMovies } from '../hooks';
import { CardMovie } from '../components';
import { useQueryClient } from 'react-query';
import { QUERY_KEY_MOVIE } from '../helpers';

export function HomeScreen() {
  const {
    data: popularData,
    isLoading: popularLoading,
  } = useGetPopularMovies();
  const {
    data: trendingData,
    isLoading: trendingLoading,
  } = useGetTodayTrendingMovies();
  const queryClient = useQueryClient();

  if (popularLoading || trendingLoading) return <Text>Loading...</Text>;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={popularLoading || trendingLoading}
          onRefresh={() => queryClient.invalidateQueries(QUERY_KEY_MOVIE.GET)}
        />
      }
    >
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
