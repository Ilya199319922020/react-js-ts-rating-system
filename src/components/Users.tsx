import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../reduxStore/reducers/usersReducers";
import { useSelector } from "react-redux";
import { getUsersAll } from "../reduxStore/selector";
import { Box, Grid, Typography } from "@mui/material";
import UsersGrade from "./UsersGrade/UsersGrade";
import UsersList from "./UsersList/UsersList";

function Users() {
	const users = useSelector(getUsersAll);
	const dispatch: any = useDispatch();           //поправить тип хука
	console.log(users)

	useEffect(() => {
		dispatch(fetchUsers())
	}, []);

	return (
		<Box
			sx={{
				flexGrow: 1,
				width: '1920px',
				height: '1031px',
				background: 'linear-gradient(148.14deg, #E0F4FF -13.52%, #FFFFFF 116.75%)',
			}}
		>
			<Typography
			variant="h6"
			>
				Интерфейс системы оценки / бана / поощрения пользователей
			</Typography>
			<Grid
				container columns={16}
			>
				<UsersList />
				<UsersGrade />
			</Grid>
		</Box>
	);
};

export default Users;