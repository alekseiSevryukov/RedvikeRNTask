import {combineReducers, configureStore, Store} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import api from '../api';

/**
 * Configures and creates the Redux store.
 *
 * This function combines the reducers from the API slice and configures the middleware.
 * It disables the serializable check for the middleware, as the API middleware is not serializable.
 * It then sets up listeners for the store's dispatch function.
 *
 * @returns {Store} The configured Redux store.
 */
const store: Store = configureStore({
  reducer: combineReducers({
    // The API reducer is added to the store with its path as the key.
    [api.reducerPath]: api.reducer,
  }),
  middleware: getDefaultMiddleware =>
    // The default middleware is configured with the serializable check disabled.
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware), // The API middleware is added to the store's middleware.
});

// Listeners are set up for the store's dispatch function.
setupListeners(store.dispatch);

export default store;
