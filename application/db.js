const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

    const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_password);
    console.log("連接的資料庫 URL:", DB);
  
mongoose
  .connect(DB)
  .then((res) => console.log("連線庫資料成功"))
  .catch((err) => console.log(err));
