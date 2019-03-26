const config = require('config.json');
const jwt = require('jsonwebtoken');
const Users = require('../../models/user/')
const bcrypt = require('bcrypt');

const fetchUsers = (req, res, next) => {
    Users.find({}, (err, users) => {
        res.json(users)
    })
}


const authenticate = async (req, res, next) => {
    const hash = bcrypt.hashSync(req.body.password, config.secret);
    const user = await Users.findOne({
        password: hash,
        username: req.body.username
    }).exec( (err, user) => {
        if (err)
            throw err
        if (user) {
            const token = jwt.sign({ sub: user.id }, config.secret);
            console.log(user)    
            res.json({ user: user.username, token })
            return
        }
        res.status(400).json({ message: 'Username or password is incorrect' })
    })
}


module.exports = {
    fetchUsers,
    authenticate
}