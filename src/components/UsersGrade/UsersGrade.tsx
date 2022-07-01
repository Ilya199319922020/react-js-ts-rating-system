import { Box, Grid, Stack, Typography } from "@mui/material"
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
		<Stack
			direction={{
				xs: 'column',
				md: 'column',
				lg: 'row',
			}}
		>
			<Box
				sx={{
					minWidth: {
						sm: 374,
						md: 464,
						lg: 464
					},
					minHeight: {
						sm: 'auto',
						md: 'auto',
						lg: 420
					},
					background: '#FBEFEF',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						background: '#F17171',
						width: {
							sm: 374,
							md: 464,
							lg: 464
						},
						height: '42px',
						borderRadius: '10px 10px 0px 0px',
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
						m: '20px 35px 43px 35px',
					}}
				>
					{listGradeNegativeUser}
				</Box>
			</Box>
			<Box
				sx={{
					minWidth: {
						sm: 374,
						md: 464,
						lg: 464
					},
					minHeight: {
						sm: 'auto',
						md: 'auto',
						lg: 420
					},
					background: '#F6FCF2',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						background: '#8BCC64',
						width: {
							sm: 374,
							md: 464,
							lg: 464
						},
						height: '42px',
						borderRadius: '10px 10px 0px 0px',
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
						m: '20px 35px 43px 35px',
					}}
				>
					{listGradePositiveUser}
				</Box>
			</Box>
		</Stack>
	);
};

export default UsersGrade;