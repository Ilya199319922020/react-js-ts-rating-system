import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../reduxStore/reducers/usersReducers";
import { useSelector } from "react-redux";
import { getUsersAll } from "../reduxStore/selector";

function UsersList() {
	const users = useSelector(getUsersAll);
	const dispatch: any = useDispatch();           //поправить тип хука
	console.log(users)

	useEffect(() => {
		dispatch(fetchUsers())
	}, []);

	return (
		<div>

		</div>
	);
};

export default UsersList;