const express = require("express");
const fs = require("fs");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const ex = express();
var path = require("path");

ex.use(express.json());
ex.use(
  fileUpload({
    useTempFile: true,
    tempFileDir: path.join(__dirname, "temp"),
  })
);
ex.use(cors());

const clerks = []


 async function create({name, email, date}){
    const clerk = {name, email, date}
    clerks.push(clerk)
    fs.writeFile('./data.json', JSON.stringify(clerk, null, 2), 'utf-8', (err) => console.log(err) )
  }



ex.route('/test').post((req, res) => {
  const data = req.body
  res.json("ok")
  create(data)
})

ex.route("/add").post((req, response) => {
  
  response.json(req.body);
});

ex.listen(5000, () => console.log("server is running in port 5000"));

