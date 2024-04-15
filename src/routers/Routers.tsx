import { NetworkProvider } from '@/providers/network-provider';
import COLORS from "@/theme/colors";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppStoreProvider } from '../providers/app-provider';
import { navigationRef } from './Navigator';
import RootStack from './RootStack';


const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.neutral.white.W400
    }
};

const App = () => {
    return (
        <AppStoreProvider>
            <NetworkProvider>
                <NavigationContainer ref={navigationRef}
                    theme={MyTheme}>
                    <RootStack />
                </NavigationContainer>
            </NetworkProvider>
        </AppStoreProvider>
    );
};


export default App;

