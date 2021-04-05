import React from 'react'
import { StatusBar } from 'react-native'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { MainNavigation } from '@navigation/main'

export class App extends React.Component {
  public render() {
    return (
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <MainNavigation />
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }
}
