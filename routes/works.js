const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('ok from works');
});

module.exports = router;
