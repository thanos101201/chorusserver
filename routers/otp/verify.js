const otpModel = require('../../models/otp');
const userModel = require('../../models/user');

const verify = (req, res) => {
    const otp = req.body.otp;
    const email = req.body.email;
    otpModel.find({
        email: email
    }).then((resp1) => {
        if(resp1.length === 0){
            res.status(404).send({
                'message': 'User does not exist'
            });
        }
        else{
            if(resp1[0].otpNum === otp){
                otpModel.updateOne({
                    email: email
                }, {
                    otpNum: "none"
                }).then((resp2) => {
                    userModel.updateOne({
                        email: email
                    }, {
                        verified: true
                    }).then((resp3) => {
                        res.status(200).send({
                            'message': 'Otp Verified'
                        });
                    }).catch((er3) => {
                        res.status(400).send(er3);
                    })
                }).catch((er2) => {
                    res.status(400).send(er2);
                });
            }
            else{
                res.status(403).send({
                    'message': 'Invalid Otp'
                })
            }
        }
    })
    
}
module.exports = verify;