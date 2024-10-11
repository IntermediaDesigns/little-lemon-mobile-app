import { Text, View } from 'react-native';
import React, { Component } from 'react';



export class LittleLemonFooter extends Component {
  render() {
    return (
      <View className="absolute bottom-0 w-full bg-gray-800 p-4">
        <Text className="text-center text-white">
          All rights reserved by Little Lemon, 2022
        </Text>
      </View>
    );
  }
}

export default LittleLemonFooter;