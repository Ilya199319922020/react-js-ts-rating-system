import { applyMiddleware, combineReducers, compose } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducers';

const reducers = combineReducers({
	users: usersReducer,
});

export type Reducers = ReturnType<typeof reducers>;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>;

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
//@ts-ignore
window.store = store;