require("dotenv").config();

const PORT = process.env.PORT;
if (PORT === undefined) {
  console.log(
    "[FlameMailApi][Error] No PORT environment variable in .env file"
  );
  process.exit(1);
}

module.exports = {
  PORT,
};
