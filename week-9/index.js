const express = require("express");
const app = express();
const formidable = require("formidable");
const fs = require("fs");

app.use(express.static("uploads"));
let database = {};

app.post("/newFile", (req, res) => {
  const form = formidable({ uploadDir: __dirname + "/uploads" });

  form.parse(req, (err, fields, files) => {
    /* database.push({ fields, files }); */
    database[fields.name] = files

    res.end();
  });
});

app.get("/getFile", (req, res) => {
     
console.log(database)

    /* res.sendFile(database) */

    res.end()

  });
  

app.listen(3000);
