import { View, Text } from 'react-native'

export default function LittleLemonFooter () {
  return (
    <View style={{ flex: 0.15, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          bottom: 0,
          margin: 'auto',
          fontSize: 16,
          color: 'black',
          textAlign: 'center'
        }}
      >
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  )
}
