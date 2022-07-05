import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { Remove, Add, FavoriteBorder } from '@mui/icons-material';
import { useEffect, useState } from "react";
import { actions } from "../../../reduxStore/reducers/usersReducers";
import { useDispatch } from "react-redux";

interface PropsUsers {
	username: string,
	id: number,
	key: string,
	userGrade: number,
	activeTab: number,
	setActiveTab: (activeTab?: any) => void,
};

const UserItem: React.FC<PropsUsers> = ({ username, id, setActiveTab }) => {
	const [gradeUser, setGradeUser] = useState<number>(0);
	const dispatch = useDispatch<any>();

	const onSetGradePositive = (): void => {
		setGradeUser(prev => prev + 1);
		console.log('добавление пользователя в список с  положительной оценкой');
	};
	const onSetGradeNegative = (): void => {
		setGradeUser(prev => prev - 1);
		console.log('добавление пользователя в список с  отрицательной оценкой');
	};

	useEffect(() => {
		if (gradeUser > 0) {
			dispatch(actions.setAddNewGradeUser(id, gradeUser));
			dispatch(actions.setFilterUsers(gradeUser));
			setActiveTab(2);
		} else if (gradeUser < 0) {
			dispatch(actions.setAddNewGradeUser(id, gradeUser));
			dispatch(actions.setFilterUsers(gradeUser));
			setActiveTab(1);
		}
	}, [gradeUser]);

	return (
		<Box
			sx={{
				height: '70px',
				background: '#FFFFFF',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}

		>
			<Avatar
				sx={{
					background: '#82D0FC',
					width: {
						sm: 40,
						md: 40,
						lg: 45,
					},
					height: {
						sm: 40,
						md: 40,
						lg: 45,
					},
					display: 'flex',
					alignItems: 'center',
				}}
			/>
			<Typography
				variant="subtitle1"
				sx={{
					display: 'flex',
					alignItems: 'center',
					fontSize: '14px',
				}}
			>
				{username}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<IconButton
					sx={{
						width: '35px',
						height: '35px',
						background: '#F17171',
						"&:hover": {
							backgroundColor: "#fc0349"
						}
					}}
					onClick={onSetGradeNegative}
				>
					<Remove
						sx={{
							color: '#FFFFFF',
						}}
					/>
				</IconButton>
				<FavoriteBorder
					sx={{
						px: '5px',
						color: '#1698E1'
					}}
				/>
				<IconButton
					sx={{
						width: '35px',
						height: '35px',
						background: '#8BCC64',
						"&:hover": {
							backgroundColor: "#2E7900"
						}
					}}
					onClick={onSetGradePositive}
				>
					<Add
						sx={{
							color: '#FFFFFF',
						}}
					/>
				</IconButton>
			</Box>
		</Box >
	);
};

export default UserItem;