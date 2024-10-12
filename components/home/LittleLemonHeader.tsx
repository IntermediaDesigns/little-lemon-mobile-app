import { View, Text } from 'react-native'
import * as React from 'react';

export default function LittleLemonHeader () {
  return (
    <View style={{ flex: 0.15, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          margin: 'auto',
          fontSize: 30,
          color: 'black',
          textAlign: 'center'
        }}
      >
        Little Lemon
      </Text>
    </View>
  )
}
