import { BaseContainer } from 'components/base'
import { HomeScreenNavigationProp, RootStackParamList } from 'navigation/routes'
import { apiGetCounts } from 'network/api/CountApi'
import React, { useEffect, FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import AppStyles from 'styles/AppStyles'
import { colors } from 'styles/theme'

type Props = {
  route: keyof RootStackParamList
  navigation: HomeScreenNavigationProp
  count: number
  onIncrement: () => void
  onDecrement: () => void
}

const HomeScreen: FC<Props> = (props) => {
  const { count, onIncrement, onDecrement } = props
  const dispatch = useDispatch()

  useEffect(() => {
    callApiCounts()
  }, [])

  const callApiCounts = () => {
    dispatch(apiGetCounts())
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const _onIncrement = () => {
    onIncrement()
  }
  const _onDecrement = () => {
    onDecrement()
  }

  return (
    <BaseContainer styleWrap={styles.styleWrap}>
      <TouchableOpacity
        onPress={_onDecrement}
        style={[AppStyles.baseButton, styles.buttonView]}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity
        onPress={_onIncrement}
        style={[AppStyles.baseButton, styles.buttonView]}>
        <Text>+</Text>
      </TouchableOpacity>
    </BaseContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  styleWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  buttonView: {
    margin: 15,
    flex: 1,
    backgroundColor: colors.downy
  }
})
