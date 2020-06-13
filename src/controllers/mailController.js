exports.sendMail = (request, response) => {
  console.log("\n[FlameMailApi][Post][/mail/sendMail][Request]", request.body);

  try {
    const mailData = request.body;
    response.status(200).json(mailData);
  } catch (error) {
    console.log(`[FlameMailApi][Post][/mail/sendMail][Error]`, error);
    response.status(500).json({
      error,
    });
  }

  console.log("[FlameMailApi][Post][/mail/sendMail][Done]\n");
};
