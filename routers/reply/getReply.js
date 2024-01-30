const replyModel = require("../../models/reply");

const getReply = (req, res) => {
    const questionId = req.headers.questionId;
    replyModel.find({
        questionId : questionId
    }).then((resp1) => {
        if(resp1.length === 0){
            res.status(204).send();
        }
        else{
            res.status(200).send({
                'message': 'Replies are here',
                'data': resp1
            });
        }
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = getReply;