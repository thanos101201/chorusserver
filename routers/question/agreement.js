const questionModel = require("../../models/questions");
const replyModel = require("../../models/reply");
const userModel = require("../../models/user");

const updatePoints = (ar) => {
    return Promise.all(ar.map((e) => {
        userModel.updateOne({
            email: e
        }, {
            $inc : {
                points: 1000
            }
        })
    }));
}

const agreement = (req, res) => {
    const questionId = req.body.questionId;
    replyModel.find({
        questionId: questionId
    }).then((resp1) => {
        if(resp1.length === 0){
            res.status(404).send({
                'message': 'No reply found'
            });
        }
        else{
            let ar = resp1.sort((a,b) => {
                return (a.upVotes.length - a.downVotes.length) - (b.upVotes.length - b.downVotes.length)
            });

            questionModel.updateOne({
                _id: questionId
            }, {
                reply : ar[ar.length -1]._id
            }).then((resp2) => {
                userModel.updateOne({
                    email: ar[ar.length -1].email
                }, {
                    $inc : {
                        points: 3000
                    }
                }).then((resp3) => {
                    updatePoints(ar[ar.length - 1].upVotes).then((resp4) => {
                        res.status(200).send({
                            'message': 'Agreement acheived',
                            'data': ar[ar.length - 1]
                        });
                    })
                }).catch((er3) => {
                    res.status(400).send(er3);
                })
            }).catch((er2) => {
                res.status(400).send(er2);
            });
        }
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = agreement;