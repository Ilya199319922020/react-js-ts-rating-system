import {  Box, Grid, Typography } from "@mui/material";
import UserItem from "./UserItem/UserItem";

function UsersList() {
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
			<UserItem/>
		</Grid>
	);
};

export default UsersList;