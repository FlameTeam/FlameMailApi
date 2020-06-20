require("dotenv").config();

const PORT = process.env.PORT;
if (PORT === undefined) {
  console.log(
    "[FlameMailApi][Error] No PORT environment variable in .env file"
  );
  process.exit(1);
}

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (SENDGRID_API_KEY === undefined) {
  console.log(
    "[FlameMailApi][Error] No SENDGRID_API_KEY environment variable in .env file"
  );
  process.exit(1);
}

const MAIL_RECEIVER = process.env.MAIL_RECEIVER;
if (MAIL_RECEIVER === undefined) {
  console.log(
    "[FlameMailApi][Error] No MAIL_RECEIVER environment variable in .env file"
  );
  process.exit(1);
}

const MAIL_SENDER = process.env.MAIL_SENDER;
if (MAIL_SENDER === undefined) {
  console.log(
    "[FlameMailApi][Error] No MAIL_SENDER environment variable in .env file"
  );
  process.exit(1);
}

module.exports = {
  PORT,
  SENDGRID_API_KEY,
  MAIL_RECEIVER,
  MAIL_SENDER,
};
