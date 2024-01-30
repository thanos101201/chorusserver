const replyModel = require("../../models/reply");

const like = (req, res) => {
    const email = req.body.email;
    const replyId = req.body.replyId;

    replyModel.find({
        _id : replyId
    }).then((resp1) => {
        if(resp1.length === 0){
            res.status(404).send({
                'message': 'Reply does not exist'
            });
        }
        else{
            let likes = resp1[0].upVotes;
            let dislikes = resp1[0].downVotes;
            if(likes.indexOf(email) === -1){
                likes.push(email);
            }
            if(dislikes.indexOf(email) !== -1){
                let ar = dislikes.filter((e) => {
                    return e !== email;
                })
                dislikes = ar;
            }
            replyModel.updateOne({
                _id: replyId
            }, {
                upVotes : likes,
                downVotes : dislikes
            }).then((resp2) => {
                res.status(200).send({
                    'message': 'Reply liked'
                })
            }).catch((er2) => {
                res.status(400).send(er2);
            });
        }
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = like;