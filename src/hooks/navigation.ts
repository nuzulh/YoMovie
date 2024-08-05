import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

export const useAppNavigation = () => useNavigation<NavigationProp<ParamListBase>>();

export const useRouteParams = <T extends unknown>() => useRoute().params as T;
