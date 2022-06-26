import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from 'react-redux';
import { createProduct, updateProduct } from '../../actions/productActions';
import { useSnackbar } from 'react-simple-snackbar';

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
		backgroundColor: '#1976D2',
		marginLeft: 0,
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: 'white',
	},
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant='h6'>{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label='close'
					className={classes.closeButton}
					onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

const AddProduct = ({ setOpen, open, currentId, setCurrentId, editMode }) => {
	const location = useLocation();
	const [productData, setProductData] = useState({
		title: '',
		img: '',
		desc: '',
		price: '',
		qty: '',
	});
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('profile'))
	);
	const dispatch = useDispatch();
	// const product = useSelector((state) =>
	// 	currentId
	// 		? state.products.products.find((c) => c._id === currentId)
	// 		: null
	// );
	// // eslint-disable-next-line
	// const [openSnackbar, closeSnackbar] = useSnackbar();
	const [openSnackbar] = useSnackbar();

	// useEffect(() => {
	// 	if (productData) {
	// 		setProductData(productData);
	// 	}
	// }, [productData]);

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('profile')));
		// setProductData({...clientData, userId: user?.result?._id})
	}, [location]);

	useEffect(() => {
		var checkId = user?.result?._id;
		if (checkId !== undefined) {
			setProductData({ ...productData, creator: checkId });
		} else {
			setProductData({
				...productData,
				creator: user?.result?.googleId,
			});
		}
	}, [location]);

	const handleSubmitProduct = (e) => {
		e.preventDefault();
		if (currentId) {
			dispatch(updateProduct(currentId, productData, openSnackbar));
		} else {
			dispatch(createProduct(productData, openSnackbar));
		}

		if (editMode) clear();
		handleClose();
	};

	const clear = () => {
		setCurrentId(null);
		setProductData({
			title: '',
			img: '',
			desc: '',
			price: '',
			qty: '',
		});
	};

	const handleClose = () => {
		setOpen(false);
	};

	const inputStyle = {
		display: 'block',
		padding: '1.4rem 0.75rem',
		width: '100%',
		fontSize: '0.8rem',
		lineHeight: 1.25,
		color: '#55595c',
		backgroundColor: '#fff',
		backgroundImage: 'none',
		backgroundClip: 'padding-box',
		borderTop: '0',
		borderRight: '0',
		borderBottom: '1px solid #eee',
		borderLeft: '0',
		borderRadius: '3px',
		transition: 'all 0.25s cubic-bezier(0.4, 0, 1, 1)',
	};

	return (
		<div>
			<form>
				<Dialog
					onClose={handleClose}
					aria-labelledby='customized-dialog-title'
					open={open}
					fullWidth>
					<DialogTitle
						id='customized-dialog-title'
						onClose={handleClose}
						style={{ paddingLeft: '20px', color: 'white' }}>
						{currentId ? 'Edit Product' : 'Add new Product'}
					</DialogTitle>
					<DialogContent dividers>
						<div className='customInputs'>
							<input
								placeholder='Title'
								style={inputStyle}
								name='title'
								type='text'
								onChange={(e) =>
									setProductData({
										...productData,
										title: e.target.value,
									})
								}
								value={productData.title}
							/>

							<input
								placeholder='Description'
								style={inputStyle}
								name='desc'
								type='text'
								onChange={(e) =>
									setProductData({
										...productData,
										desc: e.target.value,
									})
								}
								value={productData.desc}
							/>

							<input
								placeholder='Image'
								style={inputStyle}
								name='img'
								type='text'
								onChange={(e) =>
									setProductData({
										...productData,
										img: e.target.value,
									})
								}
								value={productData.img}
							/>

							<input
								placeholder='Quantity'
								style={inputStyle}
								name='qty'
								type='text'
								onChange={(e) =>
									setProductData({
										...productData,
										qty: e.target.value,
									})
								}
								value={productData.quantity}
							/>

							<input
								placeholder='Price'
								style={inputStyle}
								name='price'
								type='text'
								onChange={(e) =>
									setProductData({
										...productData,
										price: e.target.value,
									})
								}
								value={productData.price}
							/>
						</div>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={handleSubmitProduct}
							variant='contained'
							style={{ marginRight: '25px' }}>
							Save Product
						</Button>
					</DialogActions>
				</Dialog>
			</form>
		</div>
	);
};

export default AddProduct;
