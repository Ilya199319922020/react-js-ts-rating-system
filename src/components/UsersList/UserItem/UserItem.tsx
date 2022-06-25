import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { Remove, Add, FavoriteBorder } from '@mui/icons-material';

function UserItem() {
	return (
		<Box
			sx={{
				height: '808px',
				background: '#FFFFFF',
				display: 'flex',
				justifyContent: 'space-between',

			}}
		>
			<Avatar
				sx={{
					background: '#82D0FC',
					width: '60px',
					height: '60px'
				}}
			/>
			<Typography
				variant="subtitle1"
				sx={{
					fontSize: '14px',
					display: 'flex',
				}}
			>
				имя позователя
			</Typography>
			<Box>
				<IconButton
					sx={{
						background: '#F17171',
						"&:hover": {
							backgroundColor: "#fc0349"
						}
					}}
				>
					<Remove
						sx={{
							color: '#FFFFFF',
						}}
					/>
				</IconButton>
				<FavoriteBorder />
				<IconButton
					sx={{
						background: '#8BCC64',
						"&:hover": {
							backgroundColor: "#2E7900"
						}
					}}
				>
					<Add
						sx={{
							color: '#FFFFFF',
						}}
					/>
				</IconButton>
			</Box>
		</Box>
	);
};

export default UserItem;