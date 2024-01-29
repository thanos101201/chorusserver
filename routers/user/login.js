const userModel = require("../../models/user");

const login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    userModel.find({
        email:  email,
        password : password
    }).then((resp1) => {
        res.status(200).send({
            'message': 'User can proceed',
            'data': resp1
        });
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = login;