const userModel = require("../../models/user");

const deleteUser = (req, res) => {
    const email = req.headers.email;

    userModel.deleteOne({
        email: email
    }).then((resp1) => {
        res.status(200).send({
            'message': 'User deleted'
        });
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = deleteUser;