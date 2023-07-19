import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Image, Text } from '@rneui/themed';

/* type s*/
import { Shop } from '../../types/shop';
import Stars from '../Stars';

const { width } = Dimensions.get('window');
const PADDING = 27;
const CONTAINER_WIDTH = width / 2 - PADDING;
const IMAGE_PADDING = 4;
const IMAGE_WIDTH = CONTAINER_WIDTH - IMAGE_PADDING * 2;

type Props = {
  shop: Shop;
  onPress: () => void;
};

const ShopListItem: React.FC<Props> = ({ shop, onPress }: Props) => {
  const { name, imageUrl, score } = shop;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: imageUrl }} containerStyle={styles.image} resizeMode="cover" />
      <Text h4 h4Style={styles.nameText}>
        {name}
      </Text>
      <Stars score={score} />
    </TouchableOpacity>
  );
};
export default ShopListItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width: CONTAINER_WIDTH,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    paddingHorizontal: IMAGE_PADDING,
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 16,
    marginTop: 8,
    paddingHorizontal: IMAGE_PADDING,
    fontWeight: 'bold',
  },
});
