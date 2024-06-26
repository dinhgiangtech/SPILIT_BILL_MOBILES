import {COLORS, Styles} from '@/theme';
import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import StarIc from '@/assets/icons/star.svg';

const HomeScreen = observer(() => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.txtTitle}>HomeScreen</Text>
    </View>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  txtTitle: {
    ...Styles.typography.heading.h1_medium,
  },
});
