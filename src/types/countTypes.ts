import {Action} from 'redux';

export interface CountState {
  count: number;
}

export enum CountActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export interface IncrementAction
  extends Action<typeof CountActionTypes.INCREMENT> {}

export interface DecrementAction
  extends Action<typeof CountActionTypes.DECREMENT> {}

export type CountActionType = IncrementAction | DecrementAction;
