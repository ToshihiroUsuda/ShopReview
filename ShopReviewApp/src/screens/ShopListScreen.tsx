import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { Image } from '@rneui/themed';

/* types */
import { ShopListScreenProps } from '../types/navigation';
import { Shop } from '../types/shop';

/* components */
import LogOutButton from '../components/button/LogOutButton';
import ShopListItem from '../components/listItem/ShopListItem';

/* dev */
import { testShops } from '../params/shop';

const ShopListScreen: React.FC<ShopListScreenProps> = (props) => {
  const { navigation } = props;

  const renderItem: ListRenderItem<Shop> = ({ item }) => {
    return (
      <ShopListItem
        shop={item}
        onPress={() => {
          navigation.navigate('ShopDetail', { shopId: item.id });
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <FlatList
          data={testShops}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item: Shop) => item.id}
        />
        {/* <View style={{ flexDirection: 'row' }}>
          <ShopListItem shop={shop} onPress={() => {}} />
          <ShopListItem shop={shop} onPress={() => {}} />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  listItem: {},
});

export default ShopListScreen;
