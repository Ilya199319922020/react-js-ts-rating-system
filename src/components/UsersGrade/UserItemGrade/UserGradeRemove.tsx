import { Avatar, Box, Typography, IconButton, Modal, Button, Stack } from "@mui/material";
import { Remove, Add, FavoriteBorder, DeleteOutline } from '@mui/icons-material';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../reduxStore/reducers/usersReducers";
import ModalNegative from "./Modal/ModalNegative";

interface PropsUserGradeRemove {
	username: string,
	id: number,
	key: string,
	userGrade: number,
	activeTab: number,
	setActiveTab: (activeTab: number,) => void,
};

const UserGradeRemove: React.FC<PropsUserGradeRemove> = ({ id, username, userGrade, setActiveTab }) => {
	const dispatch = useDispatch<any>();
	const [isDeleteNegativeUser, setIsDeleteNegativeUser] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);

	const onChangeGradePlus = (): void => {
		if (userGrade <= (-1)) {
			dispatch(actions.setUserСounterNegativePlus(id));
			setActiveTab(1);
			console.log('увеличение отрицательной оценки');
		}
	};
	const onChangeGradeMinus = (): void => {
		if (userGrade >= (-4)) {
			dispatch(actions.setUserСounterNegativeMinus(id));
			setActiveTab(1);
			console.log('уменьшение положительной оценки');
		}
	};
	const onDeleteNegativeUser = (): void => {
		setIsDeleteNegativeUser(true);
		console.log('удалить пользователя с нулевой оценкой из отрицательного списка')

	};
	const handleOnClose = (): void => {
		setOpen(false);
		setIsDeleteNegativeUser(true);
		console.log('отправить в бан пользователя с положительной оценкой')
	};

	useEffect(() => {
		if (isDeleteNegativeUser) {
			dispatch(actions.setGradeUser(id, userGrade));
			dispatch(actions.setFilterGradeNegative(userGrade));
			setActiveTab(0);
			setIsDeleteNegativeUser(false);
		}
	}, [isDeleteNegativeUser]);

	useEffect(() => {
		if (userGrade === (-5)) {
			setOpen(true)
		}
	}, [userGrade]);

	useEffect(() => {
		if (isDeleteNegativeUser) {
			dispatch(actions.deleteUserNegative(id, userGrade));
			dispatch(actions.setFilterGradeNegative(userGrade));
			setActiveTab(0);
			setIsDeleteNegativeUser(false);
		}
	}, [open]);

	return (
		<>
			<ModalNegative
				handleOnClose={handleOnClose}
				open={open}
				username={username}
			/>
			<Box
				sx={{
					height: '70px',
					background: '#FBEFEF',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Avatar
					sx={{
						background: '#F17171',
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
						fontSize: '14px',
						display: 'flex',
						alignItems: 'center',
						width: '130px'
					}}
				>
					{username}
				</Typography>
				{
					userGrade === 0
						?
						<IconButton
							sx={{
								background: '#F17171',
								width: '35px',
								height: '35px',
								"&:hover": {
									backgroundColor: "#fc0349",
								}
							}}
							onClick={onDeleteNegativeUser}
						>
							<DeleteOutline />
						</IconButton>
						:
						<Box
							sx={{
								width: {
									xs: 15,
									sm: 20,
									md: 35,
									lg: 35,
								},
								height: {
									xs: 15,
									sm: 20,
									md: 35,
									lg: 35,
								},
								border: '2px solid #F17171',
								borderRadius: '5px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Typography
								variant="caption"
								sx={{
									fontSize: {
										xs: 10,
										sm: 14,
										md: 20,
										lg: 24,
									},
									color: '#F17171',
								}}
							>
								{userGrade}
							</Typography>
						</Box>
				}
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
						onClick={onChangeGradeMinus}
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
		</>
	);
};

export default UserGradeRemove;