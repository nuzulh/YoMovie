import { useQuery } from 'react-query';
import { getMovieDetails, getPopularMovies, getTodayTrendingMovies } from '../../services';
import { QUERY_KEY_MOVIE } from '../../helpers';

export function useGetPopularMovies() {
  return useQuery({
    queryKey: [QUERY_KEY_MOVIE.GET, 'POPULAR'],
    queryFn: () => getPopularMovies(),
  });
}

export function useGetTodayTrendingMovies() {
  return useQuery({
    queryKey: [QUERY_KEY_MOVIE.GET, 'TRENDING'],
    queryFn: () => getTodayTrendingMovies(),
  });
}

export function useGetMovieDetails(id: number) {
  return useQuery({
    queryKey: [QUERY_KEY_MOVIE.GET, 'DETAILS'],
    queryFn: () => getMovieDetails(id),
  });
}
