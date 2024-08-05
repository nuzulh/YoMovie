import { useQuery } from 'react-query';
import { getMovieDetails, getPopularMovies } from '../../services';
import { QUERY_KEY_MOVIE } from '../../helpers';

export function useGetPopularMovies(page = 1) {
  return useQuery({
    queryKey: [QUERY_KEY_MOVIE.GET, 'POPULAR'],
    queryFn: () => getPopularMovies(page),
  });
}

export function useGetMovieDetails(id: number) {
  return useQuery({
    queryKey: [QUERY_KEY_MOVIE.GET, 'DETAILS'],
    queryFn: () => getMovieDetails(id),
  });
}
