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
					width: '464px',
					height: '420px',
					ml: '41px',
					background: '#FBEFEF',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						background: '#F17171',
						width: '464px',
						height: '42px',
						borderRadius: '10px 0px 0px 0px',
						paddingRight: '25px',
					}}
				>
					<Typography
						variant="subtitle1"
						sx={{
							fontSize: '17px'
						}}
					>
						Отрицательные оценки
					</Typography>
				</Box>
				<Box
					sx={{
						m: '20px 51px 43px 51px',
					}}
				>
					{listGradeNegativeUser}
				</Box>
			</Grid>
			<Grid
				item
				sx={{
					width: '464px',
					height: '420px',
					background: '#F6FCF2',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						background: '#8BCC64',
						width: '464px',
						height: '42px',
						borderRadius: '0px 10px 0px 0px',
					}}
				>
					<Typography
						variant="subtitle1"
						sx={{
							fontSize: '17px'
						}}
					>
						Положительные оценки
					</Typography>
				</Box>
				<Box
					sx={{
						m: '20px 51px 43px 51px',
					}}
				>
					{listGradePositiveUser}
				</Box>
			</Grid>
		</>
	);
};

export default UsersGrade;