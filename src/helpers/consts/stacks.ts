export const STACKS = {
  SHARED: 'Shared',
  HOME: 'Home',
  EXPLORE: 'Explore',
  FAVORITES: 'Favorites',
};

export const SHARED_STACKS = {
  MOVIE_DETAILS_SCREEN: 'MovieDetailsScreen',
};

export const HOME_STACKS = {
  HOME_SCREEN: 'HomeScreen',
  ...SHARED_STACKS,
};

export const EXPLORE_STACKS = {
  EXPLORE_SCREEN: 'ExploreScreen',
  ...SHARED_STACKS,
};

export const FAVORITES_STACKS = {
  FAVORITES_SCREEN: 'FavoritesScreen',
  ...SHARED_STACKS,
};
