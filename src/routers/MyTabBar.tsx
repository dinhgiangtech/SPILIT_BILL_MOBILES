import React, {useCallback} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

import {Configs, PADDING_BOTTOM} from '@/commons/Configs';
import Languages from '@/commons/Languages';
import ScreenNames from '@/commons/ScreenNames';
import {Touchable} from '@/components';
import {COLORS, Styles} from '@/theme';
import HomeIc from '@/assets/icons/ic_home.svg';
import AccountIc from '@/assets/icons/ic_group.svg';
import ScanIc from '@/assets/icons/ic_scan.svg';
import NotificationIc from '@/assets/icons/ic_notification.svg';
import SettingIc from '@/assets/icons/ic_setting.svg';

import {observer} from 'mobx-react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/containers/home/Home';
import Account from '@/containers/account/Account';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GroupScreen from '@/containers/group/Group';
import NotificationScreen from '@/containers/notification/Notifications';
import ScanScreen from '@/containers/scan/ScanScreen';
import SettingScreen from '@/containers/setting/SettingScreen';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ScreenNames.home} component={HomeScreen} />
    </Stack.Navigator>
  );
};
const GroupStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ScreenNames.group} component={GroupScreen} />
    </Stack.Navigator>
  );
};
const NotificationStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ScreenNames.group} component={NotificationScreen} />
    </Stack.Navigator>
  );
};
const ScanStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ScreenNames.group} component={ScanScreen} />
    </Stack.Navigator>
  );
};
const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ScreenNames.group} component={SettingScreen} />
    </Stack.Navigator>
  );
};

const TabsData = [
  {
    name: ScreenNames.home,
    label: Languages.tabs.home,
    renderIcon: (color: string) => (
      <HomeIc
        style={{color: color || COLORS.GRAY_5} as ViewStyle}
        width={24}
        height={24}
      />
    ),
  },
  {
    name: ScreenNames.group,
    label: Languages.tabs.group,
    renderIcon: (color: any) => (
      <AccountIc
        style={{color: color || COLORS.GRAY_5} as ViewStyle}
        width={24}
        height={24}
      />
    ),
  },
  {
    name: ScreenNames.scan,
    label: Languages.tabs.scan,
    renderIcon: (color: any) => (
      <ScanIc
        style={{color: COLORS.WHITE} as ViewStyle}
        width={24}
        height={24}
      />
    ),
  },
  {
    name: ScreenNames.notification,
    label: Languages.tabs.notify,
    renderIcon: (color: any) => (
      <NotificationIc
        style={{color: color || COLORS.GRAY_5} as ViewStyle}
        width={24}
        height={24}
      />
    ),
  },
  {
    name: ScreenNames.setting,
    label: Languages.tabs.setting,
    renderIcon: (color: any) => (
      <SettingIc
        style={{color: color || COLORS.GRAY_5} as ViewStyle}
        width={24}
        height={24}
      />
    ),
  },
];

const screenOptions = {headerShown: false};

const Tab = createBottomTabNavigator();

export const MyTabBar = ({state, navigation, descriptors}: any) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route: {name: string; key: any}, index: any) => {
        const tab = TabsData.filter(item => item.label === route.name)[0];
        const isFocused = state.index === index;

        const onPress = useCallback(() => {
          navigation.navigate(route.name);
        }, [index, isFocused, route.key, route.name]);

        const color = isFocused ? COLORS.MAIN : COLORS.GRAY_6;
        if (tab.label === Languages.tabs.scan) {
          return (
            <Touchable
              radius={40}
              style={styles.tab}
              onPress={onPress}
              key={route.key}>
              <View style={styles.scanTab}>{tab?.renderIcon(color)}</View>
            </Touchable>
          );
        }
        return (
          <Touchable
            radius={8}
            onPress={onPress}
            style={styles.tab}
            key={route.key}>
            {tab?.renderIcon(color)}
          </Touchable>
        );
      })}
    </View>
  );
};

const MyBottomTabs = observer(() => {
  const renderTabBar = useCallback((props: any) => <MyTabBar {...props} />, []);
  const getTabBarVisibility = useCallback((route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === undefined ||
      routeName === ScreenNames.home ||
      routeName === ScreenNames.account
    ) {
      return true;
    }
    return false;
  }, []);

  const getOption = useCallback(
    ({route}: any) => {
      return {
        tabBarVisible: getTabBarVisibility(route),
      } as any;
    },
    [getTabBarVisibility],
  );
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBar={renderTabBar}>
      <Tab.Screen
        name={Languages.tabs.home}
        component={HomeStack}
        options={getOption}
      />
      <Tab.Screen
        name={Languages.tabs.group}
        component={GroupStack}
        options={getOption}
      />
      <Tab.Screen
        name={Languages.tabs.scan}
        component={ScanStack}
        options={getOption}
      />
      <Tab.Screen
        name={Languages.tabs.notify}
        component={NotificationStack}
        options={getOption}
      />
      <Tab.Screen
        name={Languages.tabs.setting}
        component={SettingStack}
        options={getOption}
      />
    </Tab.Navigator>
  );
});
export default MyBottomTabs;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: PADDING_BOTTOM + 21,
    marginHorizontal: 16,
    borderRadius: 40,
    shadowColor: '#333333',
    shadowOffset: {
      width: -10,
      height: -30,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  scanTab: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.MAIN,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginVertical: 8,
  },
  tabIcon: {
    fontSize: Configs.IconSize.size22,
    padding: 4,
  },
  tabLabel: {
    // ...Styles.typography.medium,
    fontSize: Configs.FontSize.size12,
  },
});
