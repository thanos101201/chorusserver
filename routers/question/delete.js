const questionModel = require("../../models/questions");

const deleteQuestion = (req, res) => {
    const id = req.body.id;
    questionModel.deleteOne({
        _id: id
    }).then((resp1) => {
        res.status(200).send({
            'message': 'Question deleted'
        });
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = deleteQuestion;