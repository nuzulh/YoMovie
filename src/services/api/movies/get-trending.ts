import { BASE_IMG_URL, movieFetcher, MovieMinimal, ListMovieResponse } from '../../../helpers';
import { useFavoriteStore } from '../../../stores';

export async function getTodayTrendingMovies() {
  const response = await movieFetcher<ListMovieResponse>(`/trending/movie/day`);

  if (!response) return [];

  const favoriteIds = useFavoriteStore.getState().favorites.map(x => x.id);
  const result: MovieMinimal[] = response.results
    .slice(0, 10)
    .map(item => ({
      id: item.id,
      title: item.title,
      imageUrl: BASE_IMG_URL + item.poster_path,
      rating: item.vote_average,
      isFavorite: favoriteIds.includes(item.id),
    }));

  return result;
}
