import {
  CountActionTypes,
  DecrementAction,
  IncrementAction
} from 'types/countTypes'

export const onIncrementAction = (): IncrementAction => {
  return {
    type: CountActionTypes.INCREMENT
  }
}

export const onDecrementAction = (): DecrementAction => {
  return {
    type: CountActionTypes.DECREMENT
  }
}
