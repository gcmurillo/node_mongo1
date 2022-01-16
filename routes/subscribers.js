const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world!');
});

router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

module.exports = router;