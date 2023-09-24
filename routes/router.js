const  Router = require('express').Router;
const { initiate } = require('../middlewares/initiate');
const {handleEvents} = require('../middlewares/events');

const router = Router();

router.route('/').get(initiate);

// router.route('/slack/events').post(handleEvents);


exports.routes = router;