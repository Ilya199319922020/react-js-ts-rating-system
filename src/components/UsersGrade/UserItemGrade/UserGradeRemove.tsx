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
};

const UserGradeRemove: React.FC<PropsUserGradeRemove> = ({ id, username, userGrade }) => {
	const dispatch: any = useDispatch();
	const [gradeCurrentNegative, setGradeCurrentNegative] = useState<number>(userGrade);
	const [isDeleteNegativeUser, setIsDeleteNegativeUser] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);

	const onChangeGradePlus = (): void => {
		if (gradeCurrentNegative <= (-1)) {
			setGradeCurrentNegative(prev => prev + 1);
		}
	};
	const onChangeGradeMinus = (): void => {
		if (gradeCurrentNegative >= (-4)) {
			setGradeCurrentNegative(prev => prev - 1);
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
			dispatch(actions.setGradeUser(id, gradeCurrentNegative));
			dispatch(actions.setFilterGradeNegative(gradeCurrentNegative));
		}
		setIsDeleteNegativeUser(false);
	}, [isDeleteNegativeUser]);

	useEffect(() => {
		if (gradeCurrentNegative === (-5)) {
			setOpen(true)
		}
	}, [gradeCurrentNegative]);

	useEffect(() => {
		if (isDeleteNegativeUser) {
			dispatch(actions.deleteUserNegative(id, gradeCurrentNegative));
			dispatch(actions.setFilterGradeNegative(gradeCurrentNegative));
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
							p: 4,
						}}>
						<Box
							sx={{
								minWidth: '540px',
								heigth: '42px',
								bgcolor: '#F17171',
							}}
						>
							<Typography variant="h6" component="h2">
								Ууу...
							</Typography>
						</Box>
						<Box>
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
						width: '60px',
						height: '60px',
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
					gradeCurrentNegative === 0
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
								width: '35px',
								height: '35px',
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
									fontSize: '24px',
									color: '#F17171',
								}}
							>
								{gradeCurrentNegative}
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