import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDebounceValue } from '../hooks';

export function ExploreScreen() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounceValue(search);

  return (
    <ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search...'
          placeholderTextColor='grey'
          autoFocus={false}
          onChangeText={setSearch}
          value={search}
        />
        <Text>{debouncedSearch}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 16,
    fontSize: 16,
    backgroundColor: 'white',
  },
})
