const Router = require('express').Router();

Router.get('/', (req, res) => { // this route only fires when a request comes into /api
    res.send('Test');
});

// the issue was this is get, should be post!
Router.post('/newuser', (req, res) => { // this route only fires when a request comes into /api/test

    // in the real world, we would now right this data to mongodb or some other server!
    console.log(req.body);

    res.send('Test 2');
});

module.exports = Router;

// I'm going to take a look at the CC extension too! Would be grea to have this!
// Thanks for watching! I'm going to leave it at that for now! I'll stream again soon, hopefully with CC