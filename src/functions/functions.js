const sendGridMail = require("@sendgrid/mail");

const {
  SENDGRID_API_KEY,
  MAIL_RECEIVER,
  MAIL_SENDER,
} = require("../config/env");

/**
 * @author DixonOrtiz
 * @function sendMail
 * @description send mail from Flame'web page to a personal email
 * @param  { json mailParameters }
 * @param {mailParameters: {
 *            string name,
 *            string email,
 *            string phone,
 *            string message
 * }}
 * @return  { success->void || error }
 */
exports.sendMail = (mailParameters) => {
  console.log(`[FlameMailApi][Function][sendMail][Param]:`, mailParameters);

  try {
    sendGridMail.setApiKey(SENDGRID_API_KEY);

    const sendGridMessage = {
      to: MAIL_RECEIVER,
      from: MAIL_SENDER,
      subject: `FlameWebApp: nuevo mensaje de ${mailParameters.name}!`,
      html: `<ul>
              <li>Nombre: ${mailParameters.name}</li>
              <li>Email: ${mailParameters.email}</li>
              <li>Teléfono: ${mailParameters.phone}</li>
              <li>Mensaje: ${mailParameters.message}</li>
             </ul>`,
    };

    sendGridMail.send(sendGridMessage);
    console.log(`[FlameMailApi][Function][sendMail][Done]`);
  } catch (error) {
    console.log(`[FlameMailApi][Function][sendMail][Error]`, error);
    console.log("[FlameMailApi][Function][sendMail][Done]");

    return error;
  }
};
