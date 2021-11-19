import { configureStore } from '@reduxjs/toolkit';

import { usersApi } from '../services/usersApi';
// store config
export default configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
});