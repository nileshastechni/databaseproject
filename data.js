const mongoose=require("mongoose")

const schema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
});

const model =mongoose.model("mytable",schema)
module.exports=model

