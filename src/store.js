import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import usersReducer from './features/users/userSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})