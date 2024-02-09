const otpgen = require('otp-generator');
const nodemailer = require('nodemailer');
const otpModel = require('../../models/otp');

const sendMail = (transporter, mailoptions) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailoptions, (err, info) => {
            if(err){
                reject(err);
            }
            else{
                resolve(info);
            }
        });
    })
}

const get = (req,res) => {
    const otpNum = otpgen.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
    const email = req.headers.email;
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
    otpModel.find({
        email: email
    }).then(async (resp1) => {
        if(resp1.length > 0){
            if(resp1[0].otpNum === 'none'){
                res.status(203).send({
                    'message': 'Email already verified'
                });
            }
            else{
                await sendMail(transporter, mailOptions).then((resp21) => {
                    console.log(resp21);
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
                    });
                }).catch((er21) => {
                    res.status(400).send(er21);
                });
            }
        }
        else{
            await sendMail(transporter, mailOptions).then((resp3) => {
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
            }).catch((er3) => {
                res.status(400).send(er3);
            })
            
        }
    })
}

module.exports = get;