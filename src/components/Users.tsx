import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../reduxStore/reducers/usersReducers";
import { useSelector } from "react-redux";
import { getUserGradeNegative, getUsersAll, getUsersGradePositive } from "../reduxStore/selector";
import { Box, Grid, Typography } from "@mui/material";
import UsersGrade from "./UsersGrade/UsersGrade";
import UsersList from "./UsersList/UsersList";

const Users: React.FC<any> = (props) => {
	const dispatch: any = useDispatch();                             //поправить тип хука  
	const [isRefresh, serIsRefresh] = useState<Boolean>(true);
	const [isNextNewUsers, setIsNextNewUsers] = useState<Boolean>(false);

	const usersGradeNegative: Array<any> = useSelector(getUserGradeNegative);
	const usersGradePositive: Array<any> = useSelector(getUsersGradePositive);
	const users: Array<any> = useSelector(getUsersAll);

	useEffect(() => {
		dispatch(fetchUsers(isNextNewUsers));
	}, []);
	useEffect(() => {
		if (isRefresh) {
			dispatch(fetchUsers(isNextNewUsers));
			serIsRefresh(false);
		}
	}, [isRefresh]);
	useEffect(() => {
		if (isNextNewUsers) {
			dispatch(fetchUsers(isNextNewUsers));
			setIsNextNewUsers(false);
		}
	}, [isNextNewUsers]);

	return (
		<Box
			sx={{

				flexGrow: 1,
				width: '100vw',
				minHeight: '100vh',
				background: 'linear-gradient(148.14deg, #E0F4FF -13.52%, #FFFFFF 116.75%)',
			}}
		>
			<Typography
				variant="h5"
				sx={{
					display: 'flex',
					justifyContent: 'center',
					pt: '30px',
				}}
			>
				Интерфейс системы оценки / бана / поощрения пользователей
			</Typography>
			<Grid
				container columns={16}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					mt: '50px',
				}}
			>
				<UsersList
					users={users}
					isRefresh={isRefresh}
					isNextNewUsers={isNextNewUsers}
					serIsRefresh={serIsRefresh}
					setIsNextNewUsers={setIsNextNewUsers}
				/>
				<UsersGrade
					usersGradeNegative={usersGradeNegative}
					usersGradePositive={usersGradePositive}
				/>
			</Grid>
		</Box>
	);
};
const UsersComponent = React.memo(Users)

export default UsersComponent;