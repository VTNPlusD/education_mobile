import {CountState, CountActionType, CountActionTypes} from 'types/countTypes';

const initialState: CountState = {
  count: 0,
};

const countReducer = (state = initialState, action: CountActionType) => {
  switch (action.type) {
    case CountActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CountActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default countReducer;
