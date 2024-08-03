import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  EXPLORE_STACKS,
  FAVORITES_STACKS,
  HOME_STACKS,
  SHARED_STACKS,
  STACKS,
} from './helpers';
import {
  DetailsScreen,
  ExploreScreen,
  FavoritesScreen,
  HomeScreen,
} from './screens';
import { useFavoriteStore } from './stores';

const AppTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();
const FavoritesStack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = { headerShown: false };

function SharedGroup(SharedStack: typeof HomeStack) {
  return (
    <SharedStack.Group screenOptions={screenOptions}>
      <SharedStack.Screen
        name={SHARED_STACKS.MOVIE_DETAILS_SCREEN}
        component={DetailsScreen}
      />
    </SharedStack.Group>
  );
}

function HomeRoute() {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name={HOME_STACKS.HOME_SCREEN} component={HomeScreen} />
      {SharedGroup(HomeStack)}
    </HomeStack.Navigator>
  );
}

function ExploreRoute() {
  return (
    <ExploreStack.Navigator screenOptions={screenOptions}>
      <ExploreStack.Screen
        name={EXPLORE_STACKS.EXPLORE_SCREEN}
        component={ExploreScreen}
      />
      {SharedGroup(ExploreStack)}
    </ExploreStack.Navigator>
  );
}

function FavoritesRoute() {
  return (
    <FavoritesStack.Navigator screenOptions={screenOptions}>
      <FavoritesStack.Screen
        name={FAVORITES_STACKS.FAVORITES_SCREEN}
        component={FavoritesScreen}
      />
      {SharedGroup(FavoritesStack)}
    </FavoritesStack.Navigator>
  );
}

function AppNavigator() {
  const favorites = useFavoriteStore(state => state.favorites);

  return (
    <AppTab.Navigator>
      <AppTab.Screen name={STACKS.HOME} component={HomeRoute} />
      <AppTab.Screen name={STACKS.EXPLORE} component={ExploreRoute} />
      <AppTab.Screen
        name={STACKS.FAVORITES}
        component={FavoritesRoute}
        options={{
          tabBarBadge: !favorites.length ? undefined : favorites.length,
        }}
      />
    </AppTab.Navigator>
  );
}

export function Route() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
