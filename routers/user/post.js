const userModel = require("../../models/user");

const post = (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    let userm = new userModel();
    userm.name = name;
    userm.email = email;
    userm.password = password;
    userm.save().then((resp1) => {
        res.status(200).send({
            'message': 'User added',
            'data': resp1
        });
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = post;