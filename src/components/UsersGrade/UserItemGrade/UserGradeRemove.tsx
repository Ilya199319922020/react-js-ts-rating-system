import { Avatar, Box, Typography, IconButton } from "@mui/material";
import { Remove, Add, FavoriteBorder } from '@mui/icons-material';
import { useState } from "react";

interface PropsUserGradeRemove {
	username: string,
	id: number,
	key: string,
	userGrade: number,
};

const UserGradeRemove: React.FC<PropsUserGradeRemove> = ({ id, username, userGrade }) => {
	const [gradeCurrentNegative, setGradeCurrentNegative] = useState<number>(userGrade);

	const onChangeGradePlus = (): void => {
		if (gradeCurrentNegative <= (-1)) {
			setGradeCurrentNegative(prev => prev + 1);
		}
	};
	const onChangeGradeMinus = (): void => {
		if (gradeCurrentNegative >= (-4)) {
			setGradeCurrentNegative(prev => prev - 1);
		}
	};

	return (
		<Box
			sx={{
				height: '70px',
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
					{gradeCurrentNegative}
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
		</Box>
	);
};

export default UserGradeRemove;