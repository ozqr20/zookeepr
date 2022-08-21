const path = require('path');
const router = require('express').Router();

// / points to the root route of the server
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

// It will redirect the user if the path does not exist 
// this route should always come last, otherwise will take precedence over named routes
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;