import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useGetMovieDetails, useRouteParams } from '../hooks';
import { ButtonFav, Chip } from '../components';
import { formatDate } from '../helpers';

export function DetailsScreen() {
  const { movieId } = useRouteParams<{ movieId: number }>();
  const { data, isLoading } = useGetMovieDetails(movieId);

  if (isLoading) return <Text>Loading...</Text>;
  if (!data) return <Text>Movie not found!</Text>;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        source={{ uri: data.poster_path }}
        style={styles.image}
      />
      <ButtonFav
        data={{
          id: data.id,
          title: data.title,
          imageUrl: data.poster_path,
          rating: data.vote_average,
          isFavorite: data.is_favorite,
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.genresContainer}>
          {data.genres.map(genre => <Chip key={genre.id} label={genre.name} />)}
        </View>
        <Text style={styles.description}>{data.overview}</Text>
        <View style={styles.releasedDateContainer}>
          <Text style={styles.releasedDate}>
            Released at {formatDate(new Date(data.release_date))}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: '3/2',
  },
  contentContainer: {
    padding: 16,
    alignItems: 'center',
    gap: 12,
    borderBottomColor: 'black',
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  releasedDateContainer: {
    width: '100%',
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
    paddingVertical: 12,
    marginTop: 12,
  },
  releasedDate: {
    fontSize: 15,
    textAlign: 'right',
  },
});
