const { sendMail } = require("../functions/functions");

/**
 * @author DixonOrtiz
 * @controller sendMailController
 * @description send mail from Flame'web page to a personal email
 * @param  { http request, http response }
 * @param {body: {
 *            string name,
 *            string email,
 *            string phone,
 *            string message
 * }}
 * @response  { json mailParameters }
 */
exports.sendMailController = (request, response) => {
  console.log("\n[FlameMailApi][Post][/mail/sendMail][Request]", request.body);

  try {
    const { name, email, phone, message } = request.body;

    const mailParameters = {
      name,
      email,
      phone,
      message,
    };

    sendMail(mailParameters);

    console.log(
      "[FlameMailApi][Post][/mail/sendMail][Response]: Message sent successfully!"
    );
    response.status(200).json({ mailParameters });
  } catch (error) {
    console.log(`[FlameMailApi][Post][/mail/sendMail][Error]`, error);
    response.status(500).json({
      error,
    });
  }
  console.log("[FlameMailApi][Post][/mail/sendMail][Done]\n");
};
