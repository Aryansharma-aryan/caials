const jwt = require('jsonwebtoken');

const adminEmail = 'rosy@caials.com';
const adminPassword = 'Passport$7';

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (email === adminEmail && password === adminPassword) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.status(200).json({ token, message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.email === adminEmail) {
      next();
    } else {
      res.status(403).json({ message: 'Not authorized' });
    }
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { loginAdmin, verifyAdmin };
