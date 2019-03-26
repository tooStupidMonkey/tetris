require('rootpath')();
const express = require('express')
const next = require('next')
const cors = require('cors');
const bodyParser = require('body-parser')
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const PORT = /* process.env.PORT || */ 4000
const dev = true /* process.env.NODE_DEV !== 'production'  *///true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() //part of next config
const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://localhost:27017/users', () => {
    if (err) throw err;

    db.collection('mammals').find().toArray(function (err, result) {
      if (err) throw err;
  
      console.log(result);
    });
})
nextApp.prepare().then(() => {
    // express code here
    const app = express()
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(jwt());
    app.use('/api/users', require('./routes/index')); 
    app.use(errorHandler);
    app.get('*', (req,res) => {
        return handle(req,res) // for all the react stuff
    })
    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })
})