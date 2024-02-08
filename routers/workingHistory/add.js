const workingHistoryModel = require("../../models/workingHistory");

const add = ( req, res ) => {
    const email = req.body.email;
    const questionId = req.body.questionId;
    const replyText = req.body.replyText;

    let workm = new workingHistoryModel();
    workm.questionId = questionId;
    workm.replyText = replyText;
    workm.email = email;
    workm.replyId = `${new Date().getUTCMilliseconds()}`

    workm.save().then((resp1) => {
        res.status(200).send({
            'message': 'Reply added'
        });
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = add;