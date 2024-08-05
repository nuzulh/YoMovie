import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { cardStyles } from '../styles/card.style';
import { useAppNavigation } from '../hooks';
import { MovieMinimal, parseRating, SHARED_STACKS } from '../helpers';
import { ButtonFav } from './button-fav.component';
import { commonStyles } from '../styles';

type Props = {
  data: MovieMinimal;
};

export function CardMovie({ data }: Props) {
  const { navigate } = useAppNavigation();

  return (
    <TouchableOpacity
      key={data.id}
      style={[cardStyles.movieCard, commonStyles.shadow]}
      onPress={() => navigate(SHARED_STACKS.MOVIE_DETAILS_SCREEN, {
        movieId: data.id,
      })}
    >
      <Image
        source={{ uri: data.imageUrl }}
        resizeMode="cover"
        style={cardStyles.movieCardImage}
        alt=""
      />
      <View style={cardStyles.movieCardContent}>
        <Text>{parseRating(data.rating)} / 10</Text>
        <Text style={cardStyles.textTitle} numberOfLines={2}>
          {data.title}
        </Text>
      </View>
      <ButtonFav data={data} />
    </TouchableOpacity>
  );
}
