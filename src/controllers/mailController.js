const {
  MAIL_SERVICE,
  MAIL_USER,
  MAIL_PASSWORD,
  MAIL_RECEIVER,
} = require("../config/env");
const nodemailer = require("nodemailer");

/**
 * @controller sendMail
 * @description send mail from Flame'web page to a personal email
 * @param  { http request, http response }
 * @param {body: {
 *            string nameState,
 *            string emailState,
 *            string phoneState
 *            string messateState
 * }}
 * @response  { json info (email sending information) }
 */
exports.sendMail = (request, response) => {
  console.log("\n[FlameMailApi][Post][/mail/sendMail][Request]", request.body);

  const mailData = request.body;

  const name = mailData.nameState;
  const email = mailData.emailState;
  const phone = mailData.phoneState;
  const message = mailData.messageState;

  const transport = nodemailer.createTransport({
    service: MAIL_SERVICE,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: MAIL_USER,
    to: MAIL_RECEIVER,
    subject: `Flame Web Page Message from ${name}!`,
    text: `
           name: ${name}
           email: ${email}
           phone: ${phone}
           message: ${message}`,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("[FlameMailApi][Post][/mail/sendMail][Error]", error);
      console.log("[FlameMailApi][Post][/mail/sendMail][Done]\n");

      response.status(500).json({ error });
    } else {
      console.log("[FlameMailApi][Post][/mail/sendMail][Response]", info);
      console.log("[FlameMailApi][Post][/mail/sendMail][Done]\n");

      response.status(200).json({ info });
    }
  });
};
