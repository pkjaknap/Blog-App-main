const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }

    // const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied' });
     console.log(token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};
