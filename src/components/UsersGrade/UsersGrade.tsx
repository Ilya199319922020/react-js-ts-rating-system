import { Box,  Stack, Typography } from "@mui/material"
import UserGradeAdd from "./UserItemGrade/UserGradeAdd";
import UserGradeRemove from "./UserItemGrade/UserGradeRemove";

interface PropsUsersGrade {
	usersGradeNegative: Array<any>,
	usersGradePositive: Array<any>,
	activeTab: number,
	setActiveTab: (activeTab: number,) => void,
};

const UsersGrade: React.FC<PropsUsersGrade> = ({ activeTab, setActiveTab, usersGradeNegative, usersGradePositive }) => {
	const listGradeNegativeUser = usersGradeNegative
		.map((n: any) => <UserGradeRemove
			key={n.uid}
			id={n.id}
			username={n.username}
			userGrade={n.userGrade}
			activeTab={activeTab}
			setActiveTab={setActiveTab}
		/>
		);

	const listGradePositiveUser = usersGradePositive
		.map((n: any) => <UserGradeAdd
			key={n.uid}
			id={n.id}
			username={n.username}
			userGrade={n.userGrade}
			activeTab={activeTab}
			setActiveTab={setActiveTab}
		/>
		);

	return (
		<div
		>
			<Stack
				direction={{
					xs: 'column',
					md: 'column',
					lg: 'row',
				}}
			>
				<Box
					className={activeTab === 1 ? 'activeTabItem' : ''}
					sx={{
						minWidth: {
							xs: 374,
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
							minWidth: {
								xs: 374,
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
					className={activeTab === 2 ? 'activeTabItem' : ''}
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
		</div>
	);
};

export default UsersGrade;