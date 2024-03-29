// const workingHistoryModel = require("../../models/workingHistory");

const workingHistoryModel = require("../../models/workingHistory");

// const like = (req, res) => {
//     const index = req.body.index;
//     const email = req.body.email;
//     const id = req.body.id;
    
//     workingHistoryModel.find({
//         _id: id
//     }).then((resp1) => {
//         if(resp1.length === 0){
//             res.status(404).send({
//                 'message': 'History not found'
//             });
//         }
//         else{
//             let likes = resp1[0].chats[index].upVotes;
//             let dislikes = resp1[0].chats[index].downVotes;
//             if(likes.indexOf(email) === -1){
//                 likes.push(email);
//             }
//             if(dislikes.indexOf(email) !== -1){
//                 let ar = dislikes.filter((e) => {
//                     return e !== email
//                 });
//                 dislikes = ar;
//             }
//             let ar = resp1[0].chats[index];
//             ar.upVotes = likes;
//             ar.downVotes = dislikes;

//             resp1[0].chats[index] = ar;
//             workingHistoryModel.updateOne({
//                 _id : id
//             }, {
//                 chats: resp1[0].chats
//             }).then((resp2) => {
//                 res.status(200).send({
//                     'message': 'liked'
//                 });
//             }).catch((er2) => {
//                 res.status(400).send(er2);
//             })
//         }
//     }).catch((er1) => {
//         res.status(400).send(er1);
//     })
// }

// module.exports = like;

const like = (req, res) => {
    const id = req.body.id;
    const email = req.body.email;

    workingHistoryModel.find({
        _id: id
    }).then((resp1) => {
        if(resp1.length === 0){
            res.status(204).send();
        }
        else{
            let ar = resp1[0].upVotes;
            if(ar.indexOf(email) !== -1){
                res.status(403).send({
                    'message': 'History already liked'
                });
            }
            else{
                ar.push(email);
                let ar1 = resp1[0].downVotes.filter((e) => {
                    if(e !== email) return true;
                    return false;
                })
                workingHistoryModel.updateOne({
                    _id: id
                }, {
                    upVotes: ar,
                    downVotes: ar1
                }).then((resp2) => {
                    res.status(200).send({
                        'message': 'liked'
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

module.exports = like;