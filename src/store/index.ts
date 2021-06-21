import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import interceptor from 'network/interceptor';
import rootReducer, {AppState} from 'reducers';
import rootSaga from 'sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer, createTransform} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const sagaMiddleware = createSagaMiddleware();

export const PERSIST_KEY = 'root';
const persistConfig = {
  key: PERSIST_KEY,
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
  transforms: [
    createTransform(
      inboundState => ({...(inboundState as any), error: ''}),
      outboundState => ({...outboundState, error: ''}),
      {whitelist: ['auth']},
    ),
  ],
};

const createStoreWithMiddleware = applyMiddleware(
  interceptor({
    onRequestError: (state: any, response: any) => {
      console.log('onRequestError response', response);
    },
    headers: (origHeaders: object) => origHeaders,
    // headers: (origHeaders: object, state: AppState) => {
    //   if (Object.entries(origHeaders).length === 0 && state.user.token) {
    //     return {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${state.user.token}`,
    //     };
    //   } else return origHeaders;
    // },
  }),
  sagaMiddleware,
  apiMiddleware,
)(createStore);

const store = createStoreWithMiddleware(
  persistReducer<AppState>(persistConfig, rootReducer),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
