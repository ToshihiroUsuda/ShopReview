import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { Button, useTheme } from '@rneui/themed';

/* types */
import { ReviewEditScreenProps } from '../types/navigation';
import { Shop } from '../types/shop';

/* components */

/* dev */
import { testShops } from '../params/shop';

const ReviewEditScreen: React.FC<ReviewEditScreenProps> = (props) => {
  const { navigation, route } = props;
  const { shopId } = route.params;

  const { theme } = useTheme();
  const [shop, setShop] = useState<Shop | undefined>(undefined);

  useEffect(() => {
    // dev
    const currentShop = testShops.find((s) => s.id === shopId);
    setShop(currentShop);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: shop ? shop.name : '',
      headerRight: () => (
        <Button
          type="clear"
          icon={{ name: 'close', color: theme.colors.primary }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [shop, navigation, theme.colors.primary]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Review Edit</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ReviewEditScreen;
