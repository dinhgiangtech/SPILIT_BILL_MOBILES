import {COLORS, Styles} from '@/theme';
import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import StarIc from '@/assets/icons/star.svg';

const NotificationScreen = observer(() => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.txtTitle}>NotificationScreen</Text>
    </View>
  );
});

export default NotificationScreen;

const styles = StyleSheet.create({
  txtTitle: {
    ...Styles.typography.heading.h1_medium,
  },
});
