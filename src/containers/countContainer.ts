import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import CountScreen from 'screens/main/CountScreen'
import { countSelector } from 'selectors/countSelector'
import { onIncrementAction, onDecrementAction } from 'redux/actions/countAction'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onIncrement: () => dispatch(onIncrementAction()),
    onDecrement: () => dispatch(onDecrementAction())
  }
}

export default connect(countSelector, mapDispatchToProps)(CountScreen)
