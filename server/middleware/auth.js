import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET = process.env.SECRET;

const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
        console.log("🚀 ~ file: auth.js ~ line 10 ~ auth ~ token", token)
		const isCustomAuth = token.length < 500;

		let decodeData;

		if (token && isCustomAuth) {
			//If token is custom token then verify
			decodeData = jwt.verify(token, SECRET);
			req.userId = decodeData?.id;
		} else {
			//Else of token is google token then decode
			decodeData = jwt.decode(token);
			req.userId = decodeData?.sub;
		}

		next();
	} catch (error) {
		console.log('Aunthentication Error!', error);
		res.status(401).json({ message: 'Aunthentication Error!' });
	}
};

export default auth;
