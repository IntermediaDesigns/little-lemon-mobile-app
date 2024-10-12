import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'

const menuItems = [
  {
    name: 'Appetizers',
    items: ['Fried Calamari', 'Bruschetta', 'Caprese Salad', 'Garlic Bread']
  },
  {
    name: 'Entrees',
    items: [
      'Chicken Parmesan',
      'Eggplant Parmesan',
      'Spaghetti and Meatballs',
      'Fettuccine, Alfredo',
      'Lasagna',
      'Chicken Marsala',
      'Chicken Piccata',
      'Chicken Alfredo',
      'Shrimp Scampi',
      'Shrimp Alfredo',
      'Shrimp Marinara',
      'Shrimp Fra Diavolo'
    ]
  },
  {
    name: 'Desserts',
    items: ['Tiramisu', 'Cannoli', 'Chocolate Cake', 'Cheesecake']
  },
  {
    name: 'Drinks',
    items: ['Soda', 'Iced Tea', 'Lemonade', 'Beer', 'Wine', 'Cocktails']
  },
  {
    name: 'Specials',
    items: [
      'Monday: Spaghetti and Meatballs',
      'Tuesday: Chicken Parmesan',
      'Wednesday: Lasagna',
      'Thursday: Shrimp Scampi',
      'Friday: Chicken Alfredo',
      'Saturday: Eggplant Parmesan',
      'Sunday: Fettuccine Alfredo'
    ]
  }
]

export default function MenuItems () {
  return (
    <View style={{ flex: 0.75, backgroundColor: 'black', marginBottom: 40 }}>
      {menuItems.map(category => (
        <View key={category.name}>
          <Text
            style={{
              fontSize: 22,
              color: 'white',
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 20,
              fontWeight: 'bold'
            }}
          >
            {category.name}
          </Text>
          {category.items.map(item => (
            <Text
              key={item}
              style={{
                fontSize: 18,
                color: 'white',
                textAlign: 'center',
                margin: 10
              }}
            >
              {item}
            </Text>
          ))}
        </View>
      ))}
    </View>
  )
}
