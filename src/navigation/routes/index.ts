import { StackNavigationProp } from '@react-navigation/stack'

// Root Stack

export type RootStackParamList = {
  Main: undefined
  Splash: undefined
}

export type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>

// Main Stack

export type MainRootStackParamList = {
  Count: undefined
  BottomTab: undefined
}

export type CountScreenNavigationProp = StackNavigationProp<
  MainRootStackParamList,
  'Count'
>
