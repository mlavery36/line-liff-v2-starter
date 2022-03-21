const nodemailer = require('nodemailer');

const fn = {};
module.exports = fn;

// 宣告發信物件
let transporter;

fn.init = (option) => {
  transporter = nodemailer.createTransport(option);
};

fn.send = ({
  to, from = '', cc = '', bcc = '', subject, text = '', html = '', attachments = [],
}, callback) => {
  const prmis = new Promise((resolve, reject) => {
    const options = {
      // 寄件者，Gmail不允許改這個...
      from,
      to,
      cc,
      // 密件副本
      bcc,
      subject,
      text,
      // 嵌入html的內文
      html,
      // 附件檔案
      attachments,
    };

    // 發送信件方法
    transporter.sendMail(options, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
      if (callback) callback(err, info);
    });
  });
  return prmis;
};
