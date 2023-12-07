const Imap = require('imap')
const { MailParser } = require('mailparser')
const fs = require('fs')
const path = require('path')

const imap = new Imap({
  user: '2196714064@qq.com',
  password: 'idojtdsorgcyecha',
  host: 'imap.qq.com',
  port: 993,
  tls: true,
})

imap.once('ready', () => {
  imap.openBox('INBOX', true, (err) => {
    imap.search(
      [['SEEN'], ['SINCE', new Date('2023-11-22').toLocaleString()]],
      (err, results) => {
        if (!err) {
          // console.log(results)
          handleResult(results)
        } else {
          throw err
        }
      }
    )
  })
})

function handleResult (results) {
  imap
    .fetch(results, {
      markSeen: false,
      bodies: '',
      struct: true,
    })
    .on('message', (msg) => {
      const mailparser = new MailParser()

      msg.on('body', (stream) => {
        const info = {}
        stream.pipe(mailparser)

        mailparser.on('headers', (headers) => {
          info.theme = headers.get('subject')
          info.form = headers.get('from').value[0].address
          info.mailName = headers.get('from').value[0].name
          info.to = headers.get('to').value[0].address
          info.datatime = headers.get('date').toLocaleString()
        })

        mailparser.on('data', (data) => {
          if (data.type === 'text') {
            info.html = data.html
            info.text = data.text

            // 把 html 保存到本地
            const filePath = path.join(__dirname, 'mails', info.theme.replace(/\s*/g, "") + '.html');
            console.log(filePath, '122121 ')
            fs.writeFileSync(filePath, info.html || info.text)

            console.log(info)
          }

          // 如果有附件，就写到 files 目录下
          if (data.type === 'attachment') {
            const filePath = path.join(__dirname, 'files', data.filename)
            const ws = fs.createWriteStream(filePath)
            data.content.pipe(ws)
          }
        })
      })
    })
}

imap.connect()
