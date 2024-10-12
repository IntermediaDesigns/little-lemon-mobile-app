import { View, Text, ScrollView } from 'react-native'
import * as React from 'react'
import MenuItems from '../menu/MenuItems'

export default function WelcomeScreen () {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57'
      }}
    >
      <ScrollView
        indicatorStyle={'white'}
        style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}
      >
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 10,
            fontWeight: 'bold'
          }}
        >
          Welcome to Little Lemon
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            textAlign: 'center',
            margin: 20
          }}
        >
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <MenuItems />
      </ScrollView>
    </View>
  )
}
