const workingHistoryModel = require("../../models/workingHistory");

const post = (req, res) => {
    const questionId = req.body.questionId;
    const email = req.body.email;
    const replyId = req.body.replyId;

    let workm = new workingHistoryModel();
    workm.questionId = questionId;
    let ar = [];
    let data = {
        upVotes: [],
        downVotes: [],
        replyId : replyId,
        email: email
    }
    ar.push(data);
    workm.chat = ar;
    
    workm.save().then((resp1) => {
        res.status(200).send({
            'message': 'History id'
        })
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = post;