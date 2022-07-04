import usersReducer, { actions, InitialState } from "./usersReducers";

let state: InitialState;

beforeEach(() => {
	state = {
		users: [
			{
				id: 5,
				uid: "3cb11ab3-ed27-4a00-88c4-e262fb571752",
				username: "tamesha.lebsack",
			},
			{
				id: 6,
				uid: "3cb11ab3-ed27-4a00-88c4-e262fb571752",
				username: "tamea.leb",
			}
		],
		userGradePositive: [],
		userGradeNegative: [],
	}
});

test("added field usergrade to users", () => {
	const newState = usersReducer(state, actions.setFetchUsers(state.users));
	expect(newState.users).toEqual(expect.arrayContaining([
		expect.objectContaining({ userGrade: 0 })
	])
	);
}
);

test("user addition and field addition", () => {
	const newState = usersReducer(state, actions.setNextNewUsers(state.users));
	expect(newState.users.length).toBe(state.users.length + state.users.length)
	expect(newState.users).toEqual(expect.arrayContaining([
		expect.objectContaining({ userGrade: 0 })
	])
	);
}
);

test("added new grade user", () => {
	const updateState = usersReducer(state, actions.setFetchUsers(state.users));
	const newState = usersReducer(updateState, actions.setAddNewGradeUser(5, 1));
	expect(newState.users).toEqual(expect.arrayContaining([
		expect.objectContaining({ userGrade: 1 })
	])
	);
}
);

test("filter users positive", () => {
	const updateState = usersReducer(state, actions.setFetchUsers(state.users));
	const addState = usersReducer(updateState, actions.setAddNewGradeUser(5, 1));
	const newState = usersReducer(addState, actions.setFilterUsers(1));
	expect(newState.users).toEqual(expect.arrayContaining([
		expect.objectContaining({ userGrade: 0 })
	])
	);
	expect(newState.userGradePositive).toEqual(expect.arrayContaining([
		expect.objectContaining({ userGrade: 1 })
	])
	);
}
);

test("filter users negative", () => {
	const updateState = usersReducer(state, actions.setFetchUsers(state.users));
	const addState = usersReducer(updateState, actions.setAddNewGradeUser(6, -1));
	const newState = usersReducer(addState, actions.setFilterUsers(1));
	expect(newState.users).toEqual(expect.arrayContaining([
		expect.objectContaining({ userGrade: 0 })
	])
	);
	expect(newState.userGradeNegative).toEqual(expect.arrayContaining([
		expect.objectContaining({ userGrade: -1 })
	])
	);
}
);