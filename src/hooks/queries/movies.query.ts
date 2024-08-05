import { useQuery } from 'react-query';
import { getPopularMovies } from '../../services';
import { QUERY_KEY_MOVIE } from '../../helpers';

export function useGetPopularMovies(page = 1) {
  return useQuery({
    queryKey: [QUERY_KEY_MOVIE.GET, 'POPULAR'],
    queryFn: () => getPopularMovies(page),
  });
}
