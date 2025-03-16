import dotenv from "dotenv";
import path from "path";
import connectDB from "config/db";
dotenv.config({
  path: path.resolve(__dirname, `./env/.env.${process.env.ENVIRONMENT}`),
});
const url = `${process.env.MONGO_URI}`;

const dataBase = new connectDB(url);
(async () => {
  await dataBase.connect();
})();

require("./index");
