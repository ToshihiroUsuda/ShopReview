import React from 'react';
import { View, StyleSheet, StyleProp } from 'react-native';
import { Icon, Text, useTheme } from '@rneui/themed';

type Props = {
  score: number;
  iconSize?: number;
  textSize?: number;
};

const Stars: React.FC<Props> = ({ score, iconSize = 20, textSize = 16 }) => {
  const { theme } = useTheme();
  const starNames: string[] = [1, 2, 3, 4, 5].map((n) =>
    score >= n ? 'star' : score >= n - 0.5 ? 'star-half' : 'star-border',
  );
  const formattedScore = Math.round(score * 100) / 100;
  return (
    <View style={styles.container}>
      <View style={styles.stars}>
        {starNames.map((name, index) => (
          <Icon
            key={index}
            name={name}
            type="material"
            color={theme.colors.secondary}
            size={iconSize}
          />
        ))}
      </View>
      <Text h4 h4Style={[styles.scoreText, { fontSize: textSize }]}>
        {formattedScore}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    paddingRight: 8,
  },
  scoreText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Stars;
