const replyModel = require("../../models/reply");

const joinReply = (req, res) => {
    let email = req.body.email;
    let replyId = req.body.replyId;

    replyModel.find({
        email:  email
    }).then((resp1) => {
        if(resp1.length === 0){
            res.status(404).send({
                'message': 'Reply not found'
            });
        }
        else{
            let ar = resp1[0].users;
            ar.push(email);
            replyModel.updateOne({
                replyId: replyId
            }, {
                users : ar
            }).then((resp2) => {
                res.status(200).send({
                    'message': 'Reply joined',
                })
            }).catch((er2) => {
                res.status(400).send(er2);
            })
        }
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = joinReply;