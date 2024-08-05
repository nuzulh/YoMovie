import React from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from '../styles';
import { useGetMovieDetails, useRouteParams } from '../hooks';

export function DetailsScreen() {
  const { movieId } = useRouteParams<{ movieId: number }>();
  const { data, isLoading } = useGetMovieDetails(movieId);

  if (isLoading) return <Text>Loading...</Text>;
  if (!data) return <Text>Movie not found!</Text>;

  return (
    <View>
      <Text style={commonStyles.textHeading}>{data.title}</Text>
    </View>
  );
}
