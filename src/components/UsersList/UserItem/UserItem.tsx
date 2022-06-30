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
};

const UserItem: React.FC<PropsUsers> = ({ username, id }) => {
	const [gradeUser, setGradeUser] = useState<number>(0);

	const dispatch: any = useDispatch();

	const onSetGradePositive = (): void => {
		setGradeUser(prev => prev + 1)
	};
	const onSetGradeNegative = (): void => {
		setGradeUser(prev => prev - 1)
	};

	useEffect(() => {
		if (gradeUser > 0) {
			dispatch(actions.setAddNewGradeUser(id, gradeUser));
			dispatch(actions.setFilterUsers(gradeUser))
		} else if (gradeUser < 0) {
			dispatch(actions.setAddNewGradeUser(id, gradeUser));
			dispatch(actions.setFilterUsers(gradeUser))
		}
	}, [gradeUser]);

	return (
		<Box
			sx={{
				height: '70px',
				background: '#FFFFFF',
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Avatar
				sx={{
					background: '#82D0FC',
					width: '60px',
					height: '60px',
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
		</Box>
	);
};

export default UserItem;