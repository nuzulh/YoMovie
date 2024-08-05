import React from 'react';
import { Text, View } from 'react-native';
import { chipStyles } from '../styles';

type Props = {
  label: string;
};

export function Chip({ label }: Props) {
  return (
    <View style={chipStyles.chip}>
      <Text style={chipStyles.chipText}>{label}</Text>
    </View>
  );
}
