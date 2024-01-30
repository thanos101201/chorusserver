const questionModel = require("../../models/questions");

const post = (req, res) => {
    const email = req.body.email;
    const title = req.body.title;
    const description = req.body.description;
    let questionm = new questionModel();
    questionm.email = email;
    questionm.title = title;
    questionm.description = description;
    questionm.save().then((resp1) => {
        res.status(200).send({
            'message': 'Question added'
        });
    }).catch((er1) => {
        res.status(400).send(er1);
    })
}

module.exports = post;