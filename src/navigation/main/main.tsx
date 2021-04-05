import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { NavScreenNameMain } from '@constants/navigation'

import { Main } from '@screens/main/main'

import type { MainStackParamList } from './typings'

const MainStack = createStackNavigator<MainStackParamList>()

interface Props {}

export const MainNavigation: React.NamedExoticComponent<React.PropsWithChildren<Props>> = React.memo(() => (
  <NavigationContainer>
    <MainStack.Navigator initialRouteName={NavScreenNameMain.Main} screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={NavScreenNameMain.Main} component={Main} />
    </MainStack.Navigator>
  </NavigationContainer>
))
