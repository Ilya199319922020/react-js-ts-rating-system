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
				users: action.users
			}

		default:
			return state;  
	}
};


 const actions = {
	setFetchUsers: (users: Array<any>) => ({ type: 'FETCH_USERS', users} as const),
};

export const fetchUsers = (): ThunkType => {
	return async (dispatch) => {
		const response = await axios.get('https://random-data-api.com/api/users/random_user?size=3')
			.then(res => res.data);
		dispatch(actions.setFetchUsers(response));
	}
};

export default usersReducer;