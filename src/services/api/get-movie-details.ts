import { BASE_IMG_URL, MovieDetails, movieFetcher } from '../../helpers';
import { useFavoriteStore } from '../../stores';

export async function getMovieDetails(id: number) {
  const response = await movieFetcher<MovieDetails>(`/movie/${id}`);

  if (!response) return null;

  const favoriteIds = useFavoriteStore.getState().favorites.map(x => x.id);
  const result: MovieDetails = {
    ...response,
    poster_path: BASE_IMG_URL + response.poster_path,
    is_favorite: favoriteIds.includes(response.id),
  };

  return result;
}
