const otpgen = require('otp-generator');
const nodemailer = require('nodemailer');
const otpModel = require('../../models/otp');

const get = (req,res) => {
    const otpNum = otpgen.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
    const email = req.headers.email;
    otpModel.find({
        email: email
    }).then((resp1) => {
        if(resp1.length > 0){
            if(resp1[0].otpNum === 'none'){
                res.status(203).send({
                    'message': 'Email already verified'
                });
            }
            else{
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'pratikthakur2019@gmail.com',
                        pass: 'tumaqnhvuanufppp'
                    }
                });
                var mailOptions = {
                    from: 'pratikthakur2019@gmail.com',
                    to: email,
                    subject: "Chorus Otp",
                    text: `
                    Your Otp for email verification is ${otpNum}
                    `
                };
                transporter.sendMail(mailOptions, (err, info) => {
                if(err){
                    res.status(400).send(err);
                }
                else{
                    console.log("Send");
                    otpModel.updateOne({
                        email: email
                    }, {
                        otpNum: otpNum
                    }).then((resp2) => {
                        res.status(200).send({
                            'message': 'Otp is send'
                        });
                    }).catch((er2) => {
                        res.send(er2);
                    })
                }
            });
        }
    }
    else{
        let otpm = new otpModel();
        otpm.email = email;
        otpm.otpNum = otpNum;
        otpm.save().then((resp2) => {
            res.status(200).send({
                'message': 'Otp is send'
            });
        }).catch((er2) => {
            res.send(er2);
        })

        }
    })
}

module.exports = get;