import {COLORS, Styles} from '@/theme';
import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SettingScreen = observer(() => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.txtTitle}>SettingScreen</Text>
    </View>
  );
});

export default SettingScreen;

const styles = StyleSheet.create({
  txtTitle: {
    ...Styles.typography.heading.h1_medium,
  },
});
