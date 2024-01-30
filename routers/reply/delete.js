const replyModel = require("../../models/reply");

const deleteReply = (req, res) => {
    const replyId = req.headers.replyId;

    replyModel.deleteOne({
        _id: replyId
    }).then((resp1) => {
        res.status(200).send({
            'message': 'Reply deleted'
        });
    })
}

module.exports = deleteReply;