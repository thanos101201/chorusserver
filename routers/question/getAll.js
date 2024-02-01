const questionModel = require("../../models/questions");

const getAll = (req, res) => {
    questionModel.find().then((resp1) => {
        if(resp1.length === 0){
            res.status(404).send({
                'message': 'No question found'
            });
        }
        else{
            res.status(200).send({
                'message': 'Questions are here',
                'data': resp1
            });
        }
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = getAll;