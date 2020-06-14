require("dotenv").config();

const PORT = process.env.PORT;
if (PORT === undefined) {
  console.log(
    "[FlameMailApi][Error] No PORT environment variable in .env file"
  );
  process.exit(1);
}

const MAIL_SERVICE = process.env.MAIL_SERVICE;
if (MAIL_SERVICE === undefined) {
  console.log(
    "[FlameMailApi][Error] No MAIL_SERVICE environment variable in .env file"
  );
  process.exit(1);
}

const MAIL_USER = process.env.MAIL_USER;
if (MAIL_USER === undefined) {
  console.log(
    "[FlameMailApi][Error] No MAIL_USER environment variable in .env file"
  );
  process.exit(1);
}

const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
if (MAIL_PASSWORD === undefined) {
  console.log(
    "[FlameMailApi][Error] No MAIL_PASSWORD environment variable in .env file"
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

module.exports = {
  PORT,
  MAIL_SERVICE,
  MAIL_USER,
  MAIL_PASSWORD,
  MAIL_RECEIVER,
};
