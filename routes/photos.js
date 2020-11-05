const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('ok from photos');
});

module.exports = router;
