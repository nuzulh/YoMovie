import { BASE_IMG_URL, ListMovieResponse, movieFetcher } from '../../../helpers';

export type SearchQuery = {
  query: string;
  primary_release_year?: number;
  page?: number;
};

export async function getSearchMovie(options: SearchQuery) {
  const response = await movieFetcher<ListMovieResponse>('/search/movie', options);

  if (!response) return null;

  const result: ListMovieResponse = {
    ...response,
    results: response.results
      .map(item => ({
        ...item,
        poster_path: BASE_IMG_URL + item.poster_path,
      })),
  };

  return result;
}
