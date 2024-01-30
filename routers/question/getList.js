const questionModel = require("../../models/questions");

const getList = (req, res) => {
    const email = req.headers.email;
    questionModel.find({
        email: email
    }).then((resp1) => {
        res.status(200).send({
            'message': 'List is here',
            'data': resp1
        });
    }).catch((er1) => {
        res.status(400).send(er1);
    });
}

module.exports = getList;