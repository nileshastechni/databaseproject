const express = require("express");
const cors = require("cors");
const mangoose = require("mongoose");
const app = express();
const datass=require("./data")



app.use(express.json());
app.use(cors());
const dburl =
  "mongodb+srv://nilasnildeveloper:KalimataNil@cluster0.9y6wv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mangoose
  .connect(dburl)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log("error", error);
  });

app.get("/", (request, response) => {
  return response.send("Welcome ");
});

app.post("/",async(request, response) => {
  try {
    const { firstname, lastname, email, mobile } = request.body;
    console.log(request.body)
    const fdata=await datass.create({ firstname, lastname, email, mobile })
console.log(fdata)
    return response.status(200).send("Project Success...")
  } catch (error) {
    return response.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log("Server Runnig");
});
