export const STACKS = {
  SHARED: 'SharedStack',
  HOME: 'HomeStack',
  EXPLORE: 'ExploreStack',
  FAVORITES: 'FavoritesStack',
};

export const SHARED_STACKS = {
  MOVIE_DETAILS_SCREEN: 'Movie',
};

export const HOME_STACKS = {
  HOME_SCREEN: 'Home',
  ...SHARED_STACKS,
};

export const EXPLORE_STACKS = {
  EXPLORE_SCREEN: 'Explore',
  ...SHARED_STACKS,
};

export const FAVORITES_STACKS = {
  FAVORITES_SCREEN: 'Favorites',
  ...SHARED_STACKS,
};
