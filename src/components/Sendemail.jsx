// import React from "react";
// // import { Mailer } from 'nodemailer-react'
// import Password from './Password'

// export default function sendEmail() {
//   const mailerConfig = {
//     defaults: {
//       from: {
//         name: 'Rana Fayez',
//         address: 'ranafayez@gmail.com',
//       },
//     },
//     transport: {
//       host: 'smtp.gmail.com',
//       secure: true,
//       auth: {
//         user: 'username',
//         pass: 'password',
//       },
//     },
//   }

//   const emailsList = {
//     pass: Password,
//   }

//   const mailer = Mailer(mailerConfig, emailsList)

//   mailer.send('pass', {
//     firstName: 'Mathieu',
//     lastName: 'Tudisco',
//     brand: 'Linkvalue',
//     newAccount: true,
//     password: Math.random().toString(36).substring(7),
//   }, {
//     to: 'foo@bar.fr',
//     attachments: [{ content: 'bar', filename: 'foo.txt' }],
//   })
// }