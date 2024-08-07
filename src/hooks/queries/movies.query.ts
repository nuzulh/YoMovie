import { useQuery } from 'react-query';
import { getMovieDetails, getPopularMovies, getSearchMovie, getTodayTrendingMovies, SearchQuery } from '../../services';
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

export function useGetSearchMovies(options: SearchQuery) {
  return useQuery({
    queryKey: 'SEARCH',
    queryFn: () => getSearchMovie(options),
    enabled: false,
    keepPreviousData: true,
  });
}
