import { Avatar, Box, Typography, IconButton, Modal, Button, Stack } from "@mui/material";
import { Remove, Add, FavoriteBorder, DeleteOutline } from '@mui/icons-material';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../reduxStore/reducers/usersReducers";

interface PropsUserGradeRemove {
	username: string,
	id: number,
	key: string,
	userGrade: number,
	activeTab: number,
	setActiveTab: (activeTab: number,) => void,
};

const UserGradeRemove: React.FC<PropsUserGradeRemove> = ({ id, username, userGrade, activeTab, setActiveTab }) => {
	const dispatch: any = useDispatch();
	const [isDeleteNegativeUser, setIsDeleteNegativeUser] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);

	const onChangeGradePlus = (): void => {
		if (userGrade <= (-1)) {
			dispatch(actions.setUserСounterNegativePlus(id));
			setActiveTab(1);
		}
	};
	const onChangeGradeMinus = (): void => {
		if (userGrade >= (-4)) {
			dispatch(actions.setUserСounterNegativeMinus(id));
			setActiveTab(1);
		}
	};
	const onDeleteNegativeUser = (): void => {
		setIsDeleteNegativeUser(true);
	};
	const handleOnClose = (): void => {
		setOpen(false);
		setIsDeleteNegativeUser(true)
	};

	useEffect(() => {
		if (isDeleteNegativeUser) {
			dispatch(actions.setGradeUser(id, userGrade));
			dispatch(actions.setFilterGradeNegative(userGrade));
			setActiveTab(0);
		}
		setIsDeleteNegativeUser(false);
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
		}
		setIsDeleteNegativeUser(false);
	}, [open]);

	return (
		<>
			<div>
				<Modal
					keepMounted
					open={open}
				>
					<Box
						sx={{
							position: 'absolute' as 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: '540px',
							heigth: '285px',
							bgcolor: '#F6FCF2',
							borderRadius: '10px 10px 0px 0px',
							border: '3px solid #1698E1',
							boxShadow: 24,
						}}>
						<Box
							sx={{
								minWidth: '100%',
								heigth: '42px',
								bgcolor: '#F17171',
								borderRadius: '6px 6px 0px 0px',
							}}
						>
							<Typography
								variant="h6" component="h2" textAlign={'center'}
							>
								Ууу...
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								pb: '10px'
							}}
						>
							<Typography variant="h6" component="h2">
								{username}
							</Typography>
							<Typography sx={{ mt: 2 }}>
								оказался не очень прилежным пользователем
							</Typography>
							<Typography sx={{ mt: 2 }}>
								Пора забанить!
							</Typography>
							<Typography sx={{ mt: 2 }}>
								Сделать это?
							</Typography>
							<Stack
								spacing={2} direction="row"
							>
								<Button
									size="medium"
									variant="contained"
									onClick={handleOnClose}
								>
									О, да!
								</Button>
							</Stack>
						</Box>
					</Box>
				</Modal>
			</div>

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
							lg: 60,
						},
						height: {
							sm: 40,
							md: 40,
							lg: 60,
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