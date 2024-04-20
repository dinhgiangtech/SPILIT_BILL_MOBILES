import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Configs, PADDING_BOTTOM } from '@/commons/Configs';
import Languages from '@/commons/Languages';
import ScreenNames from '@/commons/ScreenNames';
import { Touchable } from '@/components';
import { Styles } from '@/theme';
import COLORS from "@/theme/colors";
import HomeIcon from '@/assets/images/Home.svg';
import Search from '@/assets/images/Search.svg';
import Notification from '@/assets/images/Notification.svg';
import Avatar from '@/assets/images/Avatar.svg';

import { observer } from 'mobx-react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/containers/home/Home';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const TabsData = [
    {
        name: ScreenNames.home,
        label: Languages.tabs.home,
        icon: <HomeIcon width={20} height={20} />
    },
    {
        name: ScreenNames.search,
        label: Languages.tabs.search,
        icon: <Search width={20} height={20} />
    },
    {
        name: ScreenNames.notification,
        label: Languages.tabs.notify,
        icon: <Notification width={20} height={20} />
    },
    {
        name: ScreenNames.avatar,
        label: Languages.tabs.avatar,
        icon: <Avatar width={20} height={20} />
    },
];

const screenOptions = { headerShown: false };

const Tab = createBottomTabNavigator();

export const MyTabBar = ({ state, navigation, descriptors }: any) => {

    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route: { name: string; key: any }, index: any) => {
                const tab = TabsData.filter((item) => item.label === route.name)[0];
                const isFocused = state.index === index;

                const onPress = useCallback(() => {
                    navigation.navigate(route.name);
                }, [index, isFocused, route.key, route.name]);

                const color = isFocused
                    ? { color: COLORS.semantic.green.G800 }
                    : { color: COLORS.neutral.black.B800};

                return (
                    <Touchable onPress={onPress} style={styles.tab} key={route.key}>
                        {tab?.icon}
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
        ({ route }: any) => {
            return {
                tabBarVisible: getTabBarVisibility(route)
            } as any;
        },
        [getTabBarVisibility]
    );
    return (
        <Tab.Navigator screenOptions={screenOptions} tabBar={renderTabBar}>
            <Tab.Screen
                name={Languages.tabs.home}
                component={Home}
                options={getOption}
            />
            <Tab.Screen
                name={Languages.tabs.search}
                component={Search}
                options={getOption}
            />
            <Tab.Screen
              name={Languages.tabs.notify}
              component={Notification}
              options={getOption}
            />
            <Tab.Screen
              name={Languages.tabs.avatar}
              component={Avatar}
              options={getOption}
            />
        </Tab.Navigator>
    )
})
export default MyBottomTabs

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        paddingBottom: PADDING_BOTTOM,
        backgroundColor: COLORS.neutral.white.W900,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: "transparent",
        height: 72
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 5,
    },
    tabIcon: {
        fontSize: Configs.IconSize.size22,
        padding: 4
    },
    tabLabel: {
        ...Styles.typography.heading.h6_medium,
        fontSize: Configs.FontSize.size12
    }
});
