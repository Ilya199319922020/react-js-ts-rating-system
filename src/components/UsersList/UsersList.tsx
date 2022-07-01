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
				width: {
					sm: 374,
					md: 464,
					lg: 464
				},
				minHeight: {
					sm: 'auto',
					md: 'auto',
					lg: 420
				},
				borderRadius: '10px 10px 0px 0px',
				background: '#FFFFFF',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					background: '#C4EAFF',
					width: '100%',
					height: '42px',
					borderRadius: '10px 10px 0px 0px',
				}}
			>
				<Typography
					variant="subtitle1"
					sx={{
						fontSize: '17px'
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
					py: '43px',
				}}
			>
				<IconButton
					sx={{
						width: '35px',
						height: '35px',
						background: '#1698E1',
						mr: '10px',
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
						width: '35px',
						height: '35px',
						background: '#1698E1',
						ml: '10px',
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
			<Box
				sx={{
					p: '0 35px 43px 35px',
				}}
			>
				{listUsers}
			</Box>
		</Grid>
	);
};

export default UsersList;