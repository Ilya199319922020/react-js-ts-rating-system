import { Avatar, Box, Typography, IconButton } from "@mui/material";
import { Remove, Add, FavoriteBorder } from '@mui/icons-material';

function UserGradeRemove() {
	return (
		<Box
			sx={{
				height: '808px',
				background: '#FBEFEF',
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
			>
			</Avatar>
			<Typography
				variant="subtitle1"
				sx={{
					fontSize: '14px',
					display: 'flex',
				}}
			>
				имя позователя
			</Typography>
			<Box
				sx={{
					width: '35px',
					height: '35px',
					border: '2px solid #F17171',
					borderRadius: '5px',
				}}
			>
				<Typography
					variant="caption"
				>
					4
				</Typography>
			</Box>
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
					>
					</Remove>
				</IconButton>
				<FavoriteBorder>
				</FavoriteBorder>
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
					>
					</Add>
				</IconButton>
			</Box>
		</Box>
	);
};

export default UserGradeRemove;