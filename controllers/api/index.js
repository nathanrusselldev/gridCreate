const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gridRoutes = require('./gridRoutes')

router.use('/users', userRoutes);
router.use('/grid', gridRoutes)

module.exports = router;