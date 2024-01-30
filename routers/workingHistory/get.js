const workingHistoryModel = require("../../models/workingHistory");

const get = (req, res) => {
    const questionId = req.headers.id;

    workingHistoryModel.find({
        questionId: questionId
    }).then((resp1) => {
        if(resp1.length === 0){
            res.status(400).send({
                'message': 'History not found'
            });
        }
        else{
            res.status(200).send({
                'message': 'Working history is here',
                'data': resp1
            });
        }
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = get;