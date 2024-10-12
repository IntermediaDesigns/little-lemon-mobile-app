import LittleLemonFooter from '@/components/home/LittleLemonFooter'
import LittleLemonHeader from '@/components/home/LittleLemonHeader'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Index () {
  return (
    <SafeAreaProvider>
      <LittleLemonHeader />
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
      <LittleLemonFooter />
    </SafeAreaProvider>
  )
}
