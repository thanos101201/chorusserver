const questionModel = require("../../models/questions");
const replyModel = require("../../models/reply");

const joinReply = (req, res) => {
    let email = req.body.email;
    let questionId = req.body.questionId;

    questionModel.find({
        _id: questionId
    }).then((resp1) => {
        if(resp1.length === 0){
            res.status(204).send();
        }
        else{
            if(resp1[0].replyUsers.indexOf(email) === -1){
                res.status(403).send({
                    'message': 'User already joind the reply'
                });
            }
            else{
                let ar = resp1[0].replyUsers;
                ar.push(email);
                questionModel.updateOne({
                    _id: questionId
                }, {
                    replyUsers: ar
                }).then((resp2) => {
                    res.status(200).send({
                        'message': 'Joined reply'
                    });
                }).catch((er2) => {
                    res.status(400).send(er2);
                });
            }
        }
    }).catch((er1) => {
        res.status(400).send(er1);
    });
}

module.exports = joinReply;