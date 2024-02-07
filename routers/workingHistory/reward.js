const userModel = require("../../models/user");
const workingHistoryModel = require("../../models/workingHistory");

const updatePoints = (ar) => {
    return Promise.all(ar.map(e => {
        userModel.updateOne({
            email: e
        }, {
            $inc: {
                points: 1000
            }
        })
    }));
}

const reward = (req, res) => {
    const id = req.body.id;
    workingHistoryModel.find({
        questionId: id 
    }).then((resp1) => {
        if(resp1.length === 0){
            res.status(404).send({
                'message': 'Id not found'
            });
        }
        else{
            let ar = resp1.sort((a,b) => {
                if((a.upVotes.length - a.downVotes.length) - (b.upVotes.length - b.downVotes.length))return true;
                return false;
            });
            userModel.updateOne({
                email: ar[ar.length - 1].email
            }, {
                $inc : {
                    points: 3000
                }
            }).then(async (resp2) => {
                await updatePoints(ar[ar.length - 1].upVotes).then((resp3) => {
                    res.status(200).send({
                        'message': 'Score updated'
                    });
                }).catch((er3) => {
                    res.status(400).send(er3);
                });
            }).catch((er2) => {
                res.status(400).send(er2);
            })
        }
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = reward;