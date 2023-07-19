import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { Image, Text } from '@rneui/themed';

/* types */
import { ShopDetailScreenProps } from '../types/navigation';
import { Shop } from '../types/shop';
import { Review } from '../types/review';

/* components */
import Stars from '../components/Stars';
import CircleButton from '../components/button/CircleButton';
import ReviewListItem from '../components/listItem/RevieListItem';

/* dev */
import { testShops } from '../params/shop';
import { testReviews } from '../params/review';

const IMAGE_HEIGHT = 240;
const INFOBAR_HEIGHT = 64;

const ShopDetailScreen: React.FC<ShopDetailScreenProps> = (props) => {
  const { navigation, route } = props;
  const { shopId } = route.params;

  const [shop, setShop] = useState<Shop | undefined>(undefined);

  useEffect(() => {
    // dev
    const currentShop = testShops.find((s) => s.id === shopId);
    setShop(currentShop);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: shop ? shop.name : '',
    });
  }, [shop, navigation]);

  const renderItem: ListRenderItem<Review> = ({ item }) => <ReviewListItem review={item} />;

  const handleEditPress = () => {
    navigation.navigate('ReviewEdit', { shopId });
  };

  if (!shop) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* <Text>{`Shop Detail id ${shopId}`}</Text> */}
        <View style={styles.shopInfo}>
          <Image
            source={{ uri: shop.imageUrl }}
            containerStyle={styles.shopImage}
            resizeMode="cover"
          />
          <View style={styles.shopInfoBar}>
            <Text h4 h4Style={styles.shopInfoText}>
              {shop.name}
            </Text>
            <Stars score={shop.score} iconSize={24} textSize={24} />
          </View>
        </View>
        <View style={styles.reviewListContainer}>
          <Text h4 h4Style={{ paddingVertical: 8 }}>
            {' '}
            最近の投稿{' '}
          </Text>
          <FlatList
            data={testReviews}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            scrollEnabled
            style={{ paddingRight: 0 }}
          />
        </View>
      </View>
      <CircleButton name="edit" onPress={handleEditPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    // paddingVertical: 32,
    // paddingHorizontal: 27,
  },
  shopInfo: {
    position: 'relative',
  },
  shopImage: {
    width: '100%',
    height: IMAGE_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  shopInfoBar: {
    position: 'absolute',
    top: IMAGE_HEIGHT - INFOBAR_HEIGHT,
    left: 0,
    height: INFOBAR_HEIGHT,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 16,
    zIndex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shopInfoText: {
    fontWeight: 'bold',
  },
  reviewListContainer: {
    paddingTop: IMAGE_HEIGHT,
    paddingBottom: 64,
    // paddingHorizontal: 27,
  },
});

export default ShopDetailScreen;
