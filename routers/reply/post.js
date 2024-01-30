const replyModel = require("../../models/reply");

const post = (req, res) => {
    const email = req.body.email;
    const questionId = req.body.questionId;
    const text = req.body.text;
    let replym = new replyModel();

    replym.email = email;
    replym.questionId = questionId;
    replym.text = text;
    replym.save().then((resp1) => {
        res.status(200).send({
            'message': 'Reply added'
        })
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = post;