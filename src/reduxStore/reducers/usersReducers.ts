import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { ActionsTypes, Reducers } from "../reduxStore";

const initialState: UsersState = {
	users: [],
	userGradePositive: [],
	userGradeNegative: [],
};

export interface UsersState {
	users: Array<any>,
	userGradePositive: Array<any>,
	userGradeNegative: Array<any>,
};
type UsersAction = ActionsTypes<typeof actions>;
export type ThunkType = ThunkAction<Promise<void>, Reducers, unknown, UsersAction>

const usersReducer = (state = initialState, action: UsersAction): UsersState => {
	switch (action.type) {
		case 'FETCH_USERS':
			let grade: number = 0;
			return {
				...state,
				users: [...action.users.map(j => {
					j.userGrade = grade;
					return j;
				}
				)],
			}
		case 'FETCH_NEXT_USERS':
			return {
				...state,
				users: [...state.users, ...action.newUsers],
			}
		case 'ADD_NEWGRADE_USER':
			return {
				...state,
				users: state.users.map(p => {
					if (p.id === action.userId) {
						return { ...p, userGrade: action.valueGrade }
					}
					return p;
				}),

			}
		case 'ADD_GRADE_POSITIVE':
			return {
				...state,
				userGradePositive: state.userGradePositive.map(p => {
					if (p.id === action.userId) {
						return { ...p, userGrade: action.valueGrade }
					}
					return p;
				}),
				userGradeNegative: state.userGradeNegative.map(p => {
					if (p.id === action.userId) {
						return { ...p, userGrade: action.valueGrade }
					}
					return p;
				}),
			}

		case 'FILTER_USERS':
			return {
				...state,
				userGradePositive: [...state.userGradePositive, ...state.users.filter(p => p.userGrade > 0)],
				userGradeNegative: [...state.userGradeNegative, ...state.users.filter(p => p.userGrade < 0)],
				users: [...state.users.filter(p => p.userGrade === 0)],
			}
		case 'FILTER_USER_GRADE':
			return {
				...state,
				userGradePositive: [...state.userGradePositive.filter(p => p.userGrade > 0)],
				userGradeNegative: [...state.userGradeNegative.filter(p => p.userGrade < 0)],
				users: [...state.users, ...state.userGradePositive.filter(p => p.userGrade === 0)],
			}
		case 'FILTER_USER_GRADE_NEGATIVE':
			return {
				...state,
				users: [...state.users, ...state.userGradeNegative.filter(p => p.userGrade === 0)],
			}
		default:
			return state;
	}
};

export const actions = {
	setFetchUsers: (users: Array<any>,) => ({ type: 'FETCH_USERS', users } as const),
	setNextNewUsers: (newUsers: Array<any>,) => ({ type: 'FETCH_NEXT_USERS', newUsers } as const),
	setAddNewGradeUser: (userId: number, valueGrade: number) => ({ type: 'ADD_NEWGRADE_USER', userId, valueGrade } as const),
	setFilterUsers: (valueGrade: number) => ({ type: 'FILTER_USERS', valueGrade } as const),
	setGradePositive: (userId: number, valueGrade: number) => ({ type: 'ADD_GRADE_POSITIVE', userId, valueGrade } as const),
	setFilterGradeNegative: (valueGrade: number) => ({ type: 'FILTER_USER_GRADE_NEGATIVE', valueGrade } as const),
	setFilterGradePositive: (valueGrade: number) => ({ type: 'FILTER_USER_GRADE', valueGrade } as const),
};

export const fetchUsers = (isNextNewUsers: Boolean): ThunkType => {
	return async (dispatch) => {
		const response = await axios.get('https://random-data-api.com/api/users/random_user?size=3')
			.then(res => res.data);
		if (!isNextNewUsers) {
			dispatch(actions.setFetchUsers(response));
		} else {
			dispatch(actions.setNextNewUsers(response));
		}
	}
};

export default usersReducer;