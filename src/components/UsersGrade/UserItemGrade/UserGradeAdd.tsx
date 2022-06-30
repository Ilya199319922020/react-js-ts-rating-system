import { Avatar, Box, Typography, IconButton, Modal, Button, Stack } from "@mui/material";
import { Remove, Add, FavoriteBorder, DeleteOutline } from '@mui/icons-material';
import { useEffect, useState } from "react";
import { actions } from "../../../reduxStore/reducers/usersReducers";
import { useDispatch } from "react-redux";

interface PropsUserGradeAdd {
	username: string,
	id: number,
	key: string,
	userGrade: number,
};

const UserGradeAdd: React.FC<PropsUserGradeAdd> = ({ id, username, userGrade }) => {
	const dispatch: any = useDispatch();
	const [gradeCurrentPositive, setGradeCurrentPositive] = useState<number>(userGrade);
	const [isDeleteItemUser, setIsDeleteItemUser] = useState<Boolean>(false);
	const [open, setOpen] = useState<boolean>(false);

	const onChangeGradePlus = (): void => {
		if (gradeCurrentPositive <= 4) {
			setGradeCurrentPositive(prev => prev + 1);
		}
	};
	const onChangeGradeMinus = (): void => {
		if (gradeCurrentPositive >= 1) {
			setGradeCurrentPositive(prev => prev - 1);
		}
	};
	const onDeleteItemUser = (): void => {
		setIsDeleteItemUser(true);
	};

	const handleOnClose = (): void => {
		setOpen(false);
		setIsDeleteItemUser(true)
	};

	useEffect(() => {
		if (isDeleteItemUser) {
			dispatch(actions.setGradeUser(id, gradeCurrentPositive));
			dispatch(actions.setFilterGradePositive(gradeCurrentPositive));
		}
		setIsDeleteItemUser(false);
	}, [isDeleteItemUser]);

	useEffect(() => {
		if (gradeCurrentPositive === 5) {
			setOpen(true)
		}
	}, [gradeCurrentPositive]);

	useEffect(() => {
		if (isDeleteItemUser) {
			dispatch(actions.deleteUserPositive(id, gradeCurrentPositive));
			dispatch(actions.setFilterGradePositive(gradeCurrentPositive));
		}
		setIsDeleteItemUser(false);
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
							p: 4,
						}}>
						<Box
							sx={{
								minWidth: '540px',
								heigth: '42px',
								bgcolor: '#8BCC64',
							}}
						>
							<Typography variant="h6" component="h2">
								Та дааа!
							</Typography>
						</Box>
						<Box>
							<Typography variant="h6" component="h2">
								{username}
							</Typography>
							<Typography sx={{ mt: 2 }}>
								оказался отличным пользователем
							</Typography>
							<Typography sx={{ mt: 2 }}>
								Нужно вознаградить!
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
					background: '#F6FCF2',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Avatar
					sx={{
						background: '#8BCC64',
						width: '60px',
						height: '60px'
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
					gradeCurrentPositive === 0
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
								width: '35px',
								height: '35px',
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
									fontSize: '24px',
									color: '#8BCC64',
								}}
							>
								{gradeCurrentPositive}
							</Typography>

						</Box>
				}
			</Box>
		</>
	);
};

export default UserGradeAdd;