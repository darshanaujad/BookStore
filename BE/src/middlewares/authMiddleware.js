require('dotenv').config();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided or wrong format' });
    }

    const token = authHeader.split(' ')[1];
    console.log("🪙 Token received by middleware:", token);

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // attach decoded data (like userId)

    next();
  } catch (error) {
    console.log('JWT verify error:', error.message);
    return res.status(401).json({ message: 'Invalid or malformed token' });
  }
};

module.exports = authMiddleware;
