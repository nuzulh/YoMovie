import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppNavigation, useDebounceValue } from '../hooks';
import { useQuery } from 'react-query';
import { getSearchMovie, SearchQuery } from '../services';
import { parseRating, SHARED_STACKS } from '../helpers';
import { commonStyles } from '../styles';

export function ExploreScreen() {
  const [filter, setFilter] = useState<SearchQuery>({
    query: '',
    page: 1,
  });
  const debouncedSearch = useDebounceValue(filter.query);
  const { navigate } = useAppNavigation();

  const { data, isFetching, refetch } = useQuery({
    queryKey: 'SEARCH',
    queryFn: () => getSearchMovie({ query: debouncedSearch }),
    enabled: false,
    keepPreviousData: true,
  });

  useEffect(() => {
    refetch();
  }, [debouncedSearch]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search movie title...'
          placeholderTextColor='grey'
          autoFocus={false}
          onChangeText={val => setFilter(prev => ({ ...prev, query: val }))}
          value={filter.query}
        />
      </View>
      {!debouncedSearch.trim() ? (
        <View style={styles.fallbackContainer}>
          <Text style={styles.textTitle}>Please input your query above.</Text>
        </View>
      ) : (!data?.results.length && !isFetching) ? (
        <View style={styles.fallbackContainer}>
          <Text style={styles.textTitle}>No results found for query "{filter.query}".</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.resultsContainer}>
          {data?.results.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigate(SHARED_STACKS.MOVIE_DETAILS_SCREEN, { movieId: item.id })}
              style={styles.resultCard}
            >
              <Image
                source={{ uri: item.poster_path }}
                height={50}
                width={50}
              />
              <View style={styles.resultCardContent}>
                <Text style={styles.textTitle} numberOfLines={1}>
                  {item.title}
                  {item.release_date
                    ? ` (${new Date(item.release_date).getFullYear()})`
                    : ''}
                </Text>
                <Text>{parseRating(item.vote_average)} / 10</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: 'white',
  },
  resultsContainer: {
    gap: 10,
    paddingBottom: 16,
  },
  resultCard: {
    backgroundColor: 'white',
    padding: 12,
    marginHorizontal: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    ...commonStyles.shadow,
  },
  resultCardContent: {
    flex: 1,
    gap: 4,
  },
  textTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  fallbackContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
