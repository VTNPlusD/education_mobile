import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { onDecrementAction, onIncrementAction } from 'redux/actions/countAction'
import CountScreen from 'screens/main/CountScreen'
import { countSelector } from 'selectors/countSelector'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onIncrement: () => dispatch(onIncrementAction()),
    onDecrement: () => dispatch(onDecrementAction())
  }
}

export default connect(countSelector, mapDispatchToProps)(CountScreen)
