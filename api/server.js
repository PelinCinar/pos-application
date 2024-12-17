const express = require("express");
const mongoose = require("mongoose");
//ara yazılımla expressi bağlıyoruz express ile veritabanını bağlıyoruz mongoose ile ise node.jsde kullanbilmem iz için geliştirlen bir paket

const dotenv = require("dotenv");
const app = express();
const port = 5000;


//routes
const categoryRoute = require("./routes/categories.js")


dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    //dinlediğimiz yerde çağıracğaız
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

//bağlantı olduktan sonra kullanmak lazım

app.use("/api",categoryRoute)

app.get("/", (req, res) => res.send("sselamlarrr"));

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
