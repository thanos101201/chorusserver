const workingHistoryModel = require("../../models/workingHistory");

const post = (req, res) => {
    const questionId = req.body.questionId;
    const email = req.body.email;
    const replyId = req.body.replyId;
    const replyText = req.body.replyText


    let workm = new workingHistoryModel();
    workm.questionId = questionId;
    workm.email = email;
    workm.replyId = replyId;
    workm.replyText = replyText;
    
    workm.save().then((resp1) => {
        res.status(200).send({
            'message': 'History added'
        })
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = post;