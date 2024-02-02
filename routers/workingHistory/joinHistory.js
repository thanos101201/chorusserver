const workingHistoryModel = require("../../models/workingHistory");

const joinHistory = (req, res) => {
    let email = req.body.email;
    let id = req.body.id;

    workingHistoryModel.find({
        _id: id
    }).then((resp1) => {
        if(resp1.length === 0){
            res.status(404).send({
                'message': 'history not found'
            });
        }
        else{
            let ar = resp1[0].users;
            ar.push(email);
            workingHistoryModel.updateOne({
                _id: id
            }, {
                users: ar
            }).then((resp2) => {
                res.status(200).send({
                    'message': 'history joined'
                })
            }).catch((er2) => {
                res.status(400).send(er2);
            })
        }
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = joinHistory;