import { View, Text } from 'react-native'
import * as React from 'react';

export default function LittleLemonFooter () {
  return (
    <View style={{ flex: 0.10, backgroundColor: '#F4CE14' }}>
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
