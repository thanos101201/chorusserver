const userModel = require("../../models/user");

const get = (req, res) => {
    const email = req.headers.email;
    userModel.find({
        email: email
    }).then((resp1) => {
        res.status(200).send({
            'message': 'User is here',
            'data': resp1
        });
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = get;