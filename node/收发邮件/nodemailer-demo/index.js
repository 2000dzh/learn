const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 587,
  secure: false,
  auth: {
    user: '2196714064@qq.com',
    pass: 'idojtdsorgcyecha'
  },
})

async function main () {
  const info = await transporter.sendMail({
    from: '2196714064@qq.com',
    to: '2974778086@qq.com',
    subject: 'Hello',
    // text: 'xxxxx'
    html: fs.readFileSync('./xiaoniao.html')
  })

  console.log('邮件发送成功', info.messageId)
}

main().catch(console.error)