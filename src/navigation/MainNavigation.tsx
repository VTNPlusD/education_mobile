import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Platform } from 'react-native'

import { images } from 'assets/images'
import { TabIcon } from 'components/common'
import HomeContainer from 'containers/home'
import { MainRootStackParamList } from './routes'

const Stack = createStackNavigator<MainRootStackParamList>()
const Tab = createBottomTabNavigator()

const HomeScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeContainer} />
    </Stack.Navigator>
  )
}

const BottomTabsPhone = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return (
              <TabIcon
                icon={focused ? images.ic_home_active : images.ic_home_inactive}
              />
            )
          }
        }
      })}
      tabBarOptions={{
        activeTintColor: '#13B81A',
        inactiveTintColor: '#7F85A2',
        style: {
          paddingTop: 5,
          height: Platform.OS === 'android' ? 70 : 100,
          paddingBottom: 15
        },
        labelStyle: {
          fontSize: 11,
          fontWeight: '700'
        }
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
    </Tab.Navigator>
  )
}

export default () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="BottomTab" component={BottomTabsPhone} />
      <Stack.Screen name="Home" component={HomeContainer} />
    </Stack.Navigator>
  )
}
