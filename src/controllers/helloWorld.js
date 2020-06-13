exports.helloWorld = (request, response) => {
  console.log("\n[FlameMailApi][Get][/mail/helloWorld][Request]", request.body);

  try {
    const message = "Hello World!";
    response.status(200).json(message);
  } catch (error) {
    console.log(`[FlameMailApi][Get][/mail/helloWorld][Error]`, error);
    response.status(500).json({
      error,
    });
  }

  console.log("[FlameMailApi][Get][/mail/helloWorld][Done]\n");
};
