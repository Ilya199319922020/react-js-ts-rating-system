import React from 'react';
import { Box, Grid, Typography, IconButton, } from "@mui/material";
import UserItem from "./UserItem/UserItem";
import { NavigateNext, Refresh } from '@mui/icons-material';

interface PropsUsers {
	users: Array<any>,
	isRefresh: Boolean,
	isNextNewUsers: Boolean,
	serIsRefresh: (isRefresh: Boolean) => void,
	setIsNextNewUsers: (isNextNewUsers: Boolean) => void,
};

const UsersList: React.FC<PropsUsers> = ({ users, serIsRefresh, setIsNextNewUsers }) => {
	const listUsers = users
		.map((e: any) => <UserItem
			key={e.uid} id={e.id} username={e.username} userGrade={e.userGrade}
		/>);

	const onRefresh = (): void => {
		serIsRefresh(true)
	};
	const onNextUsers = (): void => {
		setIsNextNewUsers(true);
	};

	return (
		<Grid
			item
			sx={{
				width: '500px',
				height: '850px',
				borderRadius: '10px 10px 0px 0px',

			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					background: '#C4EAFF',
					width: '500px',
					height: '42px',
					borderRadius: '10px 10px 0px 0px',
				}}
			>
				<Typography
					variant="subtitle1"
					sx={{
						fontSize: '24px'
					}}
				>
					Пользователи
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					background: '#FFFFFF',
				}}
			>
				<IconButton
					sx={{
						background: '#1698E1',
						"&:hover": {
							background: "#096192"
						}
					}}
					onClick={onRefresh}
				>
					<Refresh
						sx={{
							color: '#FFFFFF',
						}}
					/>
				</IconButton>
				<IconButton
					sx={{
						background: '#1698E1',
						"&:hover": {
							background: "#096192"
						}
					}}
					onClick={onNextUsers}
				>
					<NavigateNext
						sx={{
							color: '#FFFFFF',
						}}
					/>
				</IconButton>
			</Box>
			{listUsers}
		</Grid>
	);
};

export default UsersList;