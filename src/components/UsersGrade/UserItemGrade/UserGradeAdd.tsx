import { Avatar, Box, Typography, IconButton, Modal, Button, Stack } from "@mui/material";
import { Remove, Add, FavoriteBorder, DeleteOutline } from '@mui/icons-material';
import { useEffect, useState } from "react";
import { actions } from "../../../reduxStore/reducers/usersReducers";
import { useDispatch } from "react-redux";
import ModalPositive from "./Modal/ModalPositive";

interface PropsUserGradeAdd {
	username: string,
	id: number,
	key: string,
	userGrade: number,
	activeTab: number,
	setActiveTab: (activeTab: number,) => void,
};

const UserGradeAdd: React.FC<PropsUserGradeAdd> = ({ id, username, userGrade, setActiveTab }) => {
	const dispatch = useDispatch<any>();
	const [isDeleteItemUser, setIsDeleteItemUser] = useState<Boolean>(false);
	const [open, setOpen] = useState<boolean>(false);

	const onChangeGradePlus = (): void => {
		if (userGrade <= 4) {
			dispatch(actions.setUserСounterPositivePlus(id));
			setActiveTab(2);
			console.log('увеличение положительной оценки')
		}
	};
	const onChangeGradeMinus = (): void => {
		if (userGrade >= 1) {
			dispatch(actions.setUserСounterPositiveMinus(id));
			setActiveTab(2);
			console.log('уменьшение положительной оценки')
		}
	};
	const onDeleteItemUser = (): void => {
		setIsDeleteItemUser(true);
		console.log('удалить пользователя с нулевой оценкой из положительного списка')
	};

	const handleOnClose = (): void => {
		setOpen(false);
		setIsDeleteItemUser(true);
		console.log('вознаградить пользователя с положительной оценкой')
	};

	useEffect(() => {
		if (isDeleteItemUser) {
			dispatch(actions.setGradeUser(id, userGrade));
			dispatch(actions.setFilterGradePositive(userGrade));
			setActiveTab(0);
			setIsDeleteItemUser(false);

		}
	}, [isDeleteItemUser]);

	useEffect(() => {
		if (userGrade === 5) {
			setOpen(true);
		}
	}, [userGrade]);

	useEffect(() => {
		if (isDeleteItemUser) {
			dispatch(actions.deleteUserPositive(id, userGrade));
			dispatch(actions.setFilterGradePositive(userGrade));
			setActiveTab(0);
			setIsDeleteItemUser(false);
		}
	}, [open]);

	return (
		<>
			<ModalPositive
				handleOnClose={handleOnClose}
				open={open}
				username={username}
			/>
			<Box
				sx={{
					height: '70px',
					background: '#F6FCF2',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Avatar
					sx={{
						background: '#8BCC64',
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
				{
					userGrade === 0
						?
						<IconButton
							sx={{
								background: '#F17171',
								width: '35px',
								height: '35px',
								"&:hover": {
									backgroundColor: "#fc0349"
								}
							}}
							onClick={onDeleteItemUser}
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
								border: '2px solid #8BCC64',
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
									color: '#8BCC64',
								}}
							>
								{userGrade}
							</Typography>

						</Box>
				}
			</Box>
		</>
	);
};

export default UserGradeAdd;