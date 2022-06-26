import { Box, Grid, Typography } from "@mui/material"
import UserGradeAdd from "./UserItemGrade/UserGradeAdd";
import UserGradeRemove from "./UserItemGrade/UserGradeRemove";

const UsersGrade = () => {
	return (
		<>
			<Grid
				item
				sx={{
					width: '350px',
					height: '850px',

				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						background: '#F17171',
						width: '350px',
						height: '42px',
						borderRadius: '10px 0px 0px 0px',
						paddingRight: '25px',
					}}
				>
					<Typography
						variant="subtitle1"
						sx={{
							fontSize: '24px'
						}}
					>
						Отрицательные оценки
					</Typography>

				</Box>
				<UserGradeRemove />
			</Grid>
			<Grid
				item
				sx={{
					width: '350px',
					height: '850px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						background: '#8BCC64',
						width: '350px',
						height: '42px',
						borderRadius: '0px 10px 0px 0px',
					}}
				>
					<Typography
						variant="subtitle1"
						sx={{
							fontSize: '24px'
						}}
					>
						Положительные оценки
					</Typography>
				</Box>
				<UserGradeAdd />
			</Grid>
		</>
	);
};

export default UsersGrade;