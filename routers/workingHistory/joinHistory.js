const questionModel = require("../../models/questions");
const workingHistoryModel = require("../../models/workingHistory");

const joinHistory = (req, res) => {
    let email = req.body.email;
    let questionId = req.body.questionId;

    questionModel.find({
        _id: questionId
    }).then((resp1) => {
        if(resp1.length === 0){
            res.status(204).send();
        }
        else{
            let ar = resp1[0].historyUsers;
            ar.push(email);
            questionModel.updateOne({
                _id: questionId
            }, {
                historyUsers: ar
            }).then((resp2) => {
                res.status(200).send({
                    'message': 'User joined history'
                });
            }).catch((er2) => {
                res.status(400).send(er2);
            })
        }
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = joinHistory;