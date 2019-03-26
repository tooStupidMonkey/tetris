const express = require('express')
const router = express.Router()
const Users = require('../models/user')
const bcrypt = require('bcrypt');
const config = require('config.json');

// router.get('/', (req, res) => {
//     Users.find({}, (err, users) => {
//         res.json(users)
//     })
// })

router.get('/', require('../controllers/userControllers').fetchUsers)
router.post('/authenticate', require('../controllers/userControllers').authenticate)

const _enctyptPassword = (password) => {
    return  bcrypt.hashSync(password, config.secret);
}

router.put('/create', (req, res) => {
    const user = new Users

    Object.keys(req.body).map(key => {
        user[key] = key == 'password' ? _enctyptPassword(req.body[key]) : req.body[key]
    })
    user.save()
    res.json(user)
})

router.use('/:id', (req, res, next) => {
    Users.findById(req.params.id, (err, user) => {
        if (err)
            res.status(500).send(err)
        else
            req.user = user
        next()
    })
});

router
    .get('/:id', (req, res) => {
        return res.json( req.user )
    })
    .put('/:id', (req, res) => {
        Object.keys(req.body).map(key=>{
            req.user[key] = req.body[key]
        })
        req.user.save()
        res.json(req.user)
    })
module.exports = router;