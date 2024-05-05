import {COLORS, Styles} from '@/theme';
import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const GroupScreen = observer(() => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.txtTitle}>GroupScreen</Text>
    </View>
  );
});

export default GroupScreen;

const styles = StyleSheet.create({
  txtTitle: {
    ...Styles.typography.heading.h1_medium,
  },
});
