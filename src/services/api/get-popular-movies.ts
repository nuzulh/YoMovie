import { BASE_IMG_URL, movieFetcher, MovieMinimal, PopularMovieResponse } from '../../helpers';
import { useFavoriteStore } from '../../stores';

export async function getPopularMovies(page = 1): Promise<MovieMinimal[]> {
  const result = await movieFetcher<PopularMovieResponse>(`/movie/popular`, {
    page: page.toString(),
  });
  if (!result) return [];

  const favoriteIds = useFavoriteStore.getState().favorites.map(x => x.id);

  return (result.results || []).map(item => ({
    id: item.id,
    title: item.title,
    imageUrl: BASE_IMG_URL + item.poster_path,
    rating: item.vote_average,
    createdAt: item.release_date,
    isFavorite: favoriteIds.includes(item.id),
  }));
}
