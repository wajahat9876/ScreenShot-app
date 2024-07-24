import { combineReducers } from '@reduxjs/toolkit';
import useReducer from '../store/slices/userSlice';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  user: useReducer
  // userSteps: userStepsSlice,
  // payee: payeeSlice,
  // config: configSlice,

  // [kycApi.reducerPath]: kycApi.reducer,
  // [userData.reducerPath]: userData.reducer,
 
});
