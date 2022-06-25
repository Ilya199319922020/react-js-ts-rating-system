import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { ActionsTypes, Reducers } from "../reduxStore";

const initialState: UsersState = {
	users: [],
	userGradeList: [],
};

export interface UsersState {
	users: Array<any>,
	userGradeList: Array<any>,
};
type UsersAction = ActionsTypes<typeof actions>;
export type ThunkType = ThunkAction<Promise<void>, Reducers, unknown, UsersAction>


const usersReducer = (state = initialState, action: UsersAction): UsersState => {

	switch (action.type) {
		case 'FETCH_USERS':
			return {
				...state,
				users: action.users,
			}
		case 'FETCH_NEXT_USERS':
			return {
				...state,
				users: [...state.users, ...action.newUsers],
			}

		default:
			return state;
	}
};


const actions = {
	setFetchUsers: (users: Array<any>,) => ({ type: 'FETCH_USERS', users } as const),
	setNextNewUsers: (newUsers: Array<any>,) => ({ type: 'FETCH_NEXT_USERS', newUsers } as const),
};

export const fetchUsers = (isNextNewUsers: Boolean): ThunkType => {
	return async (dispatch) => {
		const response = await axios.get('https://random-data-api.com/api/users/random_user?size=3')
			.then(res => res.data);
			if(!isNextNewUsers){
				dispatch(actions.setFetchUsers(response));
			}else {
				dispatch(actions.setNextNewUsers(response));
			}
			}
	};

// export const fetchNextNewUsers = (): ThunkType => {
// 	return async (dispatch) => {
// 		const response = await axios.get('https://random-data-api.com/api/users/random_user?size=3')
// 			.then(res => res.data);
// 		dispatch(actions.setNextNewUsers(response));
// 	}
// };


export default usersReducer;