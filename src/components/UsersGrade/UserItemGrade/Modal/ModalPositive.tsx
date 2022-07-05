import React from 'react';
import {  Box, Typography,  Modal, Button, Stack } from "@mui/material";

interface PropsModalPositive {
	username: string,
	open: boolean,
	handleOnClose: () => void,
};

const ModalPositive: React.FC<PropsModalPositive> = ({handleOnClose, open, username}) => {
  return (
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
					bgcolor: '#8BCC64',
					borderRadius: '6px 6px 0px 0px',
				}}
			>
				<Typography variant="h6" component="h2" textAlign={'center'}>
					Та дааа!
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
  )
};

export default ModalPositive;