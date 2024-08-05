export type MovieSpec = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  is_favorite: boolean;
};

export type PopularMovieResponse = {
  page: number;
  results: MovieSpec[];
  total_pages: number;
  total_results: number;
};

export type MovieMinimal = {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  createdAt: string;
  isFavorite: boolean;
};
