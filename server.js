const {syncAndSeed} = require('./db/index')
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use('/assets', express.static('assets'));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.use('api', require('./api'));

const init = async() => {
    try {
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`));
    }
    catch(ex) {
        console.log(ex)
    }
};

init();

