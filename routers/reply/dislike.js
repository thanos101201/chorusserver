const replyModel = require("../../models/reply");

const dislike = (req, res) => {
    const email = req.body.email;
    const replyId = req.body.replyId;

    replyModel.find({
        _id: replyId
    }).then((resp1) => {
        console.log(resp1);
        if(resp1.length === 0){
            res.status(404).send({
                'message': 'Reply not found'
            });
        }
        else{
            let likes = resp1[0].upVotes;
            let dislikes = resp1[0].downVotes;
            if(dislikes.indexOf(email) === -1){
                dislikes.push(email);
            }
            if(likes.indexOf(email) !== -1){
                let ar = likes.filter((e) => {
                    return e !== email;
                });
                likes = ar;
                replyModel.updateOne({
                    _id: replyId
                }, {
                    upVotes: likes,
                    downVotes : dislikes
                }).then((resp2) => {
                    res.status(200).send({
                        'message': 'Reply disliked'
                    })
                })
            }
            else{
                replyModel.updateOne({
                    _id: replyId
                }, {
                    upVotes: likes,
                    downVotes: dislikes
                }).then((resp2) => {
                    res.status(200).send({
                        'message': 'Reply disliked'
                    })
                }).catch((er2) => {
                    res.status(400).send(er2);
                })
            }
        }
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = dislike;