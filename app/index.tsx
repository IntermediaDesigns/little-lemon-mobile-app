import * as React from 'react'
import LittleLemonFooter from '@/components/home/LittleLemonFooter'
import LittleLemonHeader from '@/components/home/LittleLemonHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import WelcomeScreen from '@/components/home/WelcomeScreen'
import MenuItems from '@/components/menu/MenuItems'

export default function Index () {
  return (
    <SafeAreaProvider>
      <LittleLemonHeader />
      <WelcomeScreen />
      <LittleLemonFooter />
    </SafeAreaProvider>
  )
}
