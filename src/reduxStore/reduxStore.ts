import { applyMiddleware, combineReducers, compose } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducers';

const persistConfig = {
	key: 'root',
	storage,
	blacklist:['users']
}
const reducers = combineReducers({
	users: persistReducer(persistConfig, usersReducer),
});

const persistedReducer = persistReducer(persistConfig, reducers);

export type Reducers = ReturnType<typeof reducers>;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>;

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
export default store;

