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
import { useFavoriteStore } from './stores';
import { Compass, Heart, Home } from 'lucide-react-native';

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
  const { favorites } = useFavoriteStore();

  return (
    <AppTab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <AppTab.Screen
        name={STACKS.HOME}
        component={HomeRoute}
        options={{
          tabBarIcon: ({ focused }) => <Home strokeWidth={focused ? 2.5 : 1.5} />,
        }}
      />
      <AppTab.Screen
        name={STACKS.EXPLORE}
        component={ExploreRoute}
        options={{ tabBarIcon: ({ focused }) => <Compass strokeWidth={focused ? 2.5 : 1.5} /> }}
      />
      <AppTab.Screen
        name={STACKS.FAVORITES}
        component={FavoritesRoute}
        options={{
          tabBarIcon: ({ focused }) => <Heart strokeWidth={focused ? 2.5 : 1.5} />,
          tabBarBadge: !favorites.length ? undefined : favorites.length,
        }}
      />
    </AppTab.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
