const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');


app.post('/mail', (req, res) => {
    const { firstname, lastname, email, msg } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    const mailOptions = {
        from: 'sender email',
        to: 'receiver email',
        subject: 'Postfolio',
        text: `First name: ${firstname}, \nLast name: ${lastname}, \nEmail: ${email}, \nMessage: ${msg}`
    }
    transporter.sendMail(mailOptions, (err, result) => {
        if (err){
            console.log(err);
            res.json('opps! it seems like some error occured plz. try again.')
        } else{
            res.json('thanks for e-mailing me. I will reply to you within 2 working days');
        }
    })
})

//contact form
const contactBtn = document.querySelector('.contact-btn');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const msg = document.querySelector('.message');
contactBtn.addEventListener('click', () => {
    if(firstName.value.length && lastName.value.length && email.value.length && msg.value.length){
        fetch('/mail', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                firstname: firstName.value,
                lastname: lastName.value,
                email: email.value,
                msg: msg.value,
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data);
        })
    }
})