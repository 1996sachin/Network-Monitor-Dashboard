const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const tenant = require('../middlewares/tenant.middleware');
const ctrl = require('../controllers/dashboard.controller');

router.get('/', auth, tenant, ctrl.stats);

module.exports = router;
