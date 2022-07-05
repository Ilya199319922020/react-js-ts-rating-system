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

export type InitialState = typeof initialState;
type UsersAction = ActionsTypes<typeof actions>;
export type ThunkType = ThunkAction<Promise<void>, Reducers, unknown, UsersAction>

const usersReducer = (state = initialState, action: UsersAction): UsersState => {
	switch (action.type) {
		case 'FETCH_USERS':
			let grade: number = 0;
			return {
				...state,                                                                //при получении пользователей добавляем  
				users: [...action.users.map(j => {                                       //к каждому элементу поле начальной оценки 
					j.userGrade = grade;                                                  // на основе этого поля будет фильтрация пользователей 
					return j;                                                             //в зависимости от его значения по трём вкладкам 
				}
				)],
			}
		case 'FETCH_NEXT_USERS':
			let gradeNew: number = 0;                                                   
			return {
				...state,
				users: [
					...state.users,
					...action.newUsers.map(j => {
						j.userGrade = gradeNew;
						return j;
					}
					)
				],
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
		case 'ADD_GRADE_USER':
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
		case 'FILTER_USER_GRADE_POSITIVE':
			return {
				...state,
				userGradePositive: [...state.userGradePositive.filter(p => p.userGrade > 0)],
				users: [...state.users, ...state.userGradePositive.filter(p => p.userGrade === 0)],
			}
		case 'FILTER_USER_GRADE_NEGATIVE':
			return {
				...state,
				userGradeNegative: [...state.userGradeNegative.filter(p => p.userGrade < 0)],
				users: [...state.users, ...state.userGradeNegative.filter(p => p.userGrade === 0)],
			}
		case 'REMOVE_USER_NEGATIVE':
			let valueGradeUser: number = 0;
			return {
				...state,
				userGradeNegative: state.userGradeNegative.map(p => {
					if (p.id === action.userId) {
						return { ...p, userGrade: valueGradeUser }
					}
					return p;
				}),
				users: [...state.users, ...state.userGradeNegative.filter(p => p.userGrade === 0)],
			}
		case 'REMOVE_USER_POSITIVE':
			let valueRatingUser: number = 0;
			return {
				...state,
				userGradePositive: state.userGradePositive.map(p => {
					if (p.id === action.userId) {
						return { ...p, userGrade: valueRatingUser }
					}
					return p;
				}),
				users: [...state.users, ...state.userGradePositive.filter(p => p.userGrade === 0)],
			}
		case 'COUNTER_USER_NEGATIVE_MINUS':
			return {
				...state,
				userGradeNegative: state.userGradeNegative.map(p => {
					if (p.id === action.userId) {
						return { ...p, userGrade: p.userGrade - 1 }
					}
					return p;
				}),
			}
		case 'COUNTER_USER_NEGATIVE_PLUS':
			return {
				...state,
				userGradeNegative: state.userGradeNegative.map(p => {
					if (p.id === action.userId) {
						return { ...p, userGrade: p.userGrade + 1 }
					}
					return p;
				}),
			}
			case 'COUNTER_USER_POSITIVE_MINUS':
			return {
				...state,
				userGradePositive: state.userGradePositive.map(p => {
					if (p.id === action.userId) {
						return { ...p, userGrade: p.userGrade - 1 }
					}
					return p;
				}),
			}
		case 'COUNTER_USER_POSITIVE_PLUS':
			return {
				...state,
				userGradePositive: state.userGradePositive.map(p => {
					if (p.id === action.userId) {
						return { ...p, userGrade: p.userGrade + 1 }
					}
					return p;
				}),
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
	setGradeUser: (userId: number, valueGrade: number) => ({ type: 'ADD_GRADE_USER', userId, valueGrade } as const),
	setFilterGradeNegative: (valueGrade: number) => ({ type: 'FILTER_USER_GRADE_NEGATIVE', valueGrade } as const),
	setFilterGradePositive: (valueGrade: number) => ({ type: 'FILTER_USER_GRADE_POSITIVE', valueGrade } as const),
	deleteUserNegative: (userId: number, valueGrade: number) => ({ type: 'REMOVE_USER_NEGATIVE', userId, valueGrade } as const),
	deleteUserPositive: (userId: number, valueGrade: number) => ({ type: 'REMOVE_USER_POSITIVE', userId, valueGrade } as const),
	setUserСounterNegativeMinus: (userId: number) => ({ type: 'COUNTER_USER_NEGATIVE_MINUS', userId } as const),
	setUserСounterNegativePlus: (userId: number) => ({ type: 'COUNTER_USER_NEGATIVE_PLUS', userId } as const),
	setUserСounterPositivePlus: (userId: number) => ({ type: 'COUNTER_USER_POSITIVE_PLUS', userId } as const),
	setUserСounterPositiveMinus: (userId: number) => ({ type: 'COUNTER_USER_POSITIVE_MINUS', userId } as const),
};

export const fetchUsers = (isNextNewUsers?: Boolean, isFetchUsers?: Boolean): ThunkType => {
	return async (dispatch) => {
		const response = await axios.get('https://random-data-api.com/api/users/random_user?size=3')
			.then(res => res.data);
		if (!isNextNewUsers) {
			dispatch(actions.setFetchUsers(response));
		} else if (isNextNewUsers) {
			dispatch(actions.setNextNewUsers(response));
		}
	}
};

export default usersReducer;