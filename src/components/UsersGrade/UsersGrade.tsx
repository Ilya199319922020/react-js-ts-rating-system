import { Box, Grid, Typography } from "@mui/material"
import UserGradeAdd from "./UserItemGrade/UserGradeAdd";
import UserGradeRemove from "./UserItemGrade/UserGradeRemove";

const UsersGrade: React.FC<any> = ({ usersGradeNegative, usersGradePositive }) => {
	const listGradeNegativeUser = usersGradeNegative
		.map((n: any) => <UserGradeRemove
			key={n.uid} id={n.id} username={n.username} userGrade={n.userGrade}
		/>
		);

	const listGradePositiveUser = usersGradePositive
		.map((n: any) => <UserGradeAdd
			key={n.uid} id={n.id} username={n.username} userGrade={n.userGrade}
		/>
		);

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
				{listGradeNegativeUser}
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
				{listGradePositiveUser}
			</Grid>
		</>
	);
};

export default UsersGrade;