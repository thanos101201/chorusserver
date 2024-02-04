const replyModel = require("../../models/reply");

const get = (req, res) => {
    const id = req.headers.id;
    replyModel.find({
        questionId : id
    }).then((resp1) => {
        console.log(`resp1 is ${resp1.length}`);
        if(resp1.length === 0){
            res.status(204).send();
        }
        else{
            res.status(200).send({
                'message': 'Reply is here',
                'data': resp1
            });
        }
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = get;