import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

const AppTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();
const FavoritesStack = createNativeStackNavigator();

function SharedGroup(SharedStack: typeof HomeStack) {
  return (
    <SharedStack.Group>
      <SharedStack.Screen
        name={SHARED_STACKS.MOVIE_DETAILS_SCREEN}
        component={DetailsScreen}
      />
    </SharedStack.Group>
  );
}

function HomeRoute() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={HOME_STACKS.HOME_SCREEN} component={HomeScreen} />
      {SharedGroup(HomeStack)}
    </HomeStack.Navigator>
  );
}

function ExploreRoute() {
  return (
    <ExploreStack.Navigator>
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
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name={FAVORITES_STACKS.FAVORITES_SCREEN}
        component={FavoritesScreen}
      />
      {SharedGroup(FavoritesStack)}
    </FavoritesStack.Navigator>
  );
}

function AppNavigator() {
  return (
    <AppTab.Navigator screenOptions={{ headerShown: false }}>
      <AppTab.Screen name={STACKS.HOME} component={HomeRoute} />
      <AppTab.Screen name={STACKS.EXPLORE} component={ExploreRoute} />
      <AppTab.Screen name={STACKS.FAVORITES} component={FavoritesRoute} />
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
