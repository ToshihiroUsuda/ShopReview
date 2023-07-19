import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Avatar, Divider } from '@rneui/themed';
import moment from 'moment';

/* types */
import { Review } from '../../types/review';

/* components */
import Stars from '../Stars';

type Props = {
  review: Review;
};

const ReviewListItem: React.FC<Props> = ({ review }) => {
  const timestampString = moment(review.createdAt.toDate()).format('YYYY/MM/DD HH:mm');
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.listItem}>
        <Avatar
          size={64}
          rounded
          title={review.userName[0]}
          containerStyle={{ backgroundColor: 'blue' }}
        />
        <View style={styles.listItemInfo}>
          <View style={styles.listItemPost}>
            <Text style={styles.listUserName}>{review.userName}</Text>
            <Text>{`投稿日 ${timestampString}`}</Text>
          </View>
          <View style={styles.listStar}>
            <Stars score={review.score} iconSize={24} textSize={20} />
          </View>
          <Text style={styles.listReview} numberOfLines={1}>
            {review.review}
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    paddingHorizontal: 27,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  listItemInfo: {
    flexDirection: 'column',
    paddingLeft: 16,
    flexGrow: 1,
  },
  listItemPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  listUserName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listStar: {
    paddingTop: 4,
  },
  listReview: {
    fontSize: 20,
  },
});

export default ReviewListItem;
