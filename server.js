const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

const PORT = 3001;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(express.urlencoded({ urlencoded: extended }));
app.use(express.json());

app.use(morgan('dev'));

app.use('/api', require('./routes/apiRoutes'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server now running at http://localhost:${PORT}/`);
});