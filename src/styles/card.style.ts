import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create({
  movieCardContainer: {
    gap: 14,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  movieCard: {
    width: 160,
    height: 280,
    borderRadius: 14,
    gap: 8,
    backgroundColor: '#fff',
  },
  movieCardImage: {
    width: 160,
    height: 180,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  movieCardContent: {
    gap: 6,
    paddingVertical: 6,
    flex: 1,
    paddingHorizontal: 12,
  },
  buttonFavorite: {
    borderRadius: 100,
    backgroundColor: 'black',
    opacity: 0.7,
    width: 46,
    height: 46,
    position: 'absolute',
    top: 12,
    right: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
