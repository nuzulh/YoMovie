export type FavoriteMovie = {
  id: string;
  title: string;
  image: string;
  rating: number;
  createdAt: string;
};

export type FavoriteMovieActions = {
  add: (movie: FavoriteMovie) => void;
  remove: (id: string) => void;
};

export type FavoriteMovieStore = {
  favorites: FavoriteMovie[];
  actions: FavoriteMovieActions;
};
