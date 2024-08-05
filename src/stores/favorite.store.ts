import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MAX_FAVORITES, MovieMinimal } from '../helpers';
import Toast from 'react-native-toast-message';

type FavoriteMovie = Omit<MovieMinimal, 'isFavorite'> & { createdAt: Date };

type FavoriteMovieActions = {
  add: (movie: Omit<FavoriteMovie, 'createdAt'>) => void;
  remove: (id: FavoriteMovie['id']) => void;
};

type FavoriteMovieStore = {
  favorites: FavoriteMovie[];
  actions: FavoriteMovieActions;
};

export const useFavoriteStore = create<FavoriteMovieStore, any>(
  persist(
    set => ({
      favorites: [],
      actions: {
        add: movie =>
          set(prev => {
            if (prev.favorites.find(x => x.id === movie.id)) return prev;
            if (prev.favorites.length >= MAX_FAVORITES) {
              Toast.show({ type: 'error', text1: `Max. favorites is ${MAX_FAVORITES}!` })

              return prev;
            }

            return {
              ...prev,
              favorites: [
                ...prev.favorites,
                {
                  ...movie,
                  createdAt: new Date(),
                },
              ],
            };
          }),
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
      partialize: state => state.favorites,
    },
  ),
);

export const useFavoriteActions = () => useFavoriteStore(state => state.actions);
