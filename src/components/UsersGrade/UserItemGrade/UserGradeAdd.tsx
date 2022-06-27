import { Avatar, Box, Typography, IconButton } from "@mui/material";
import { Remove, Add, FavoriteBorder } from '@mui/icons-material';
import { useState } from "react";

interface PropsUserGradeAdd {
	username: string,
	id: number,
	key: string,
	userGrade: number,
};

const UserGradeAdd: React.FC<PropsUserGradeAdd> = ({ id, username, userGrade }) => {
	const [gradeCurrentPositive, setGradeCurrentPositive] = useState<number>(userGrade);

	const onChangeGradePlus = (): void => {
		if (gradeCurrentPositive <= 4) {
			setGradeCurrentPositive(prev => prev + 1);
		}
	};
	const onChangeGradeMinus = (): void => {
		if (gradeCurrentPositive >= 1) {
			setGradeCurrentPositive(prev => prev - 1);
		}
	};

	return (
		<Box
			sx={{
				height: '70px',
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
				{username}
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
					onClick={onChangeGradeMinus}
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
						width: '35px',
						height: '35px',
						"&:hover": {
							backgroundColor: "#2E7900"
						}
					}}
					onClick={onChangeGradePlus}
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
					{gradeCurrentPositive}
				</Typography>
			</Box>
		</Box>
	);
};

export default UserGradeAdd;