const questionModel = require('../../models/questions');

const get = (req, res) => {
    const id = req.headers.id;
    questionModel.find({
        _id: id
    }).then((resp1) => {
        res.status(200).send({
            'message': 'The question is here',
            'data': resp1
        });
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = get;