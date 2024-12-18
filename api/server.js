const express = require("express");
const mongoose = require("mongoose");
//ara yazılımla expressi bağlıyoruz express ile veritabanını bağlıyoruz mongoose ile ise node.jsde kullanbilmem iz için geliştirlen bir paket

const dotenv = require("dotenv");
const app = express();
const cors = require("cors"); //çağurduk sonrasında bunu middleware olarak çağırmamız lazım
const port = 5000;

//routes
const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");
const billRoute = require("./routes/bills.js");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");





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

//bağlantı olduktan sonra kullanmak lazımapp.use("/api", categoryRoute);

//middlewares
app.use(express.json());//önce jsona çevirlsin sonrasında cors kullanılsın hiyareiş,
app.use(cors());
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);




app.get("/", (req, res) => res.send("sselamlarrr"));

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
