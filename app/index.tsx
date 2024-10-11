import { Text, View } from 'react-native'
import LittleLemonHeader from './components/LittleLemonHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import LittleLemonFooter from './components/LittleLemonFooter'

export default function Index () {
  return (
    <SafeAreaProvider>
    <View>
      <View>
        <LittleLemonHeader />
      </View>
    </View>
    <LittleLemonFooter />
    </SafeAreaProvider>
  )
}
