import { Avatar, Box, Typography, IconButton } from "@mui/material";
import { Remove, Add, FavoriteBorder } from '@mui/icons-material';

function UserGradeAdd() {
	return (
		<Box
			sx={{
				height: '808px',
				background: '#F6FCF2',
				display: 'flex',
				justifyContent: 'space-between',

			}}
		>
			<Avatar
				sx={{
					// background: '#8BCC64',
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
			<Box
			>
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
				<FavoriteBorder/>
				<IconButton
					sx={{
						background: '#8BCC64',
						width: '35px',
						height: '35px',
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
			<Box
				sx={{
					width: '35px',
					height: '35px',
					border: '2px solid #8BCC64',
					borderRadius: '5px',
				}}
			>
				<Typography
					variant="caption"
				>
					4
				</Typography>
			</Box>
		</Box>
	);
};

export default UserGradeAdd;