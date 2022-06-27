import { Avatar, Box, Typography, IconButton, Modal } from "@mui/material";
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
	const handleClose = () => setOpen(false);

	useEffect(() => {
		if (gradeCurrentNegative === (-5)) {
			setOpen(true)
		}
	}, [gradeCurrentNegative]);

	useEffect(() => {
		if (isDeleteNegativeUser) {
			dispatch(actions.setGradeUser(id, gradeCurrentNegative));
			dispatch(actions.setFilterGradeNegative(gradeCurrentNegative));
		}
		setIsDeleteNegativeUser(false);
	}, [isDeleteNegativeUser]);



	return (
		<>

			<div>
				<Modal
					keepMounted
					open={open}
					onClose={handleClose}
					aria-labelledby="keep-mounted-modal-title"
					aria-describedby="keep-mounted-modal-description"
				>
					<Box sx={{
						position: 'absolute' as 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 400,
						bgcolor: 'background.paper',
						border: '2px solid #000',
						boxShadow: 24,
						p: 4,
					}}>
						<Typography id="keep-mounted-modal-title" variant="h6" component="h2">
							Text in a modal
						</Typography>
						<Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</Typography>
					</Box>
				</Modal>
			</div>

			<Box
				sx={{
					height: '70px',
					background: '#FBEFEF',
					display: 'flex',
					justifyContent: 'space-between',

				}}
			>
				<Avatar
					sx={{
						background: '#82D0FC',
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
				{
					gradeCurrentNegative === 0
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
							}}
						>
							<Typography
								variant="caption"
							>
								{gradeCurrentNegative}
							</Typography>
						</Box>
				}
				<Box>
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
					<FavoriteBorder />
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