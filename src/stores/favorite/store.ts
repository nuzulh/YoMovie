import { create } from 'zustand';
import { FavoriteMovieStore } from './type';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MAX_FAVORITES } from '../../helpers';

export const useFavoriteStore = create<FavoriteMovieStore, any>(
  persist(
    set => ({
      favorites: [],
      actions: {
        add: movie =>
          set(prev => ({
            ...prev,
            favorites:
              prev.favorites.length >= MAX_FAVORITES
                ? prev.favorites
                : [...prev.favorites, movie],
          })),
        remove: id =>
          set(prev => ({
            ...prev,
            favorites: [...prev.favorites.filter(x => x.id !== id)],
          })),
      },
    }),
    {
      name: 'YoMovieFavorites',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
