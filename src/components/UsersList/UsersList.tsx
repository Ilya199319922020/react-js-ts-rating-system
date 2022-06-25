import { Box, Grid, Typography, IconButton, } from "@mui/material";
import UserItem from "./UserItem/UserItem";
import { NavigateNext, Refresh } from '@mui/icons-material';

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
				>
					<NavigateNext
						sx={{
							color: '#FFFFFF',
						}}
					/>
				</IconButton>
			</Box>
			<UserItem />
		</Grid>
	);
};

export default UsersList;