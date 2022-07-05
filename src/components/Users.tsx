import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../reduxStore/reducers/usersReducers";
import { useSelector } from "react-redux";
import { getUserGradeNegative, getUsersAll, getUsersGradePositive } from "../reduxStore/selector";
import { Box, Grid,  styled, Typography } from "@mui/material";
import UsersGrade from "./UsersGrade/UsersGrade";
import UsersList from "./UsersList/UsersList";

const Users: React.FC<any> = (props) => {
	const MyStyledComponent = styled('div')`       
	.activeTabItem {
		border: 4px solid #1698E1;
		border-radius: 10px 10px 0px 0px;
	}
	`                                                                          //добавление стиля при активной вкладке   
	const dispatch: any = useDispatch();                                       //поправить тип хука  
	const [isRefresh, serIsRefresh] = useState<Boolean>(true);
	const [isNextNewUsers, setIsNextNewUsers] = useState<Boolean>(false);
	const [activeTab, setActiveTab] = useState<number>(0);

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
		<MyStyledComponent>
			<Box
				sx={{
					flexGrow: 1,
					width: '100vw',
					minHeight: '100vh',
					background: 'linear-gradient(148.14deg, #E0F4FF -13.52%, #FFFFFF 116.75%)',
				}}
			>
				<Typography
					sx={{
						display: 'flex',
						justifyContent: 'center',
						pt: '30px',
						px: '20px',
						textAlign: 'center',
						fontSize: {
							sm: 20,
							md: 20,
							lg: 24,
						},
					}}
				>
					Интерфейс системы оценки / бана / поощрения пользователей
				</Typography>
				<Grid
					container columns={16}
					direction={{
						xs: 'column',
						md: 'column',
						lg: 'row',
					}}
					sx={{
						display: 'flex',
						justifyContent: 'space-evenly',
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
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<UsersGrade
						usersGradeNegative={usersGradeNegative}
						usersGradePositive={usersGradePositive}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				</Grid>
			</Box>
		</MyStyledComponent>
	);
};
const UsersComponent = React.memo(Users)

export default UsersComponent;