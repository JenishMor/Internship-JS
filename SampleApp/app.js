const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
// const { stringify } = require("querystring");
const port = 9000;

// EXPRESS SPECIFIC STUFF:
app.use("../static", express.static("static")); //Serving static file

app.use(express.urlencoded()); //Write as it is because this is neccessary for backend data

// PUG SPECIFIC STUFF:
app.set("view engine", "pug"); // Set the template engine as pug
app.set("views", path.join(__dirname, "views")); //Set the views directory

// END POINT
app.get("/", (req, res) => {
  // const con = "This is the best content";
  const param = { title: "This is form", content: "This is the best content" };
  res.status(200).render("index.pug", param);
});

app.post("/", (req, res) => {
  // console.log(req.body)

  // Here we use seperate variable for each field
  fname = req.body.fname;
  lname = req.body.lname;
  gender = req.body.gender;
  mail = req.body.mail;
  en = req.body.en;
  sem = req.body.sem;
  more = req.body.more;

  let output = `First Name : ${fname} \nLast Name: ${lname}\nGender: ${gender}\nE-mail: ${mail}\nEn.no: ${en}\nSemester: ${sem}\nMore about him/her: ${more}`;

  // let output = stringify(req.body);

  fs.writeFileSync("form.txt", output);
  const param = { message: "Your form has been submitted successfully" };
  res.status(200).render("index.pug", param);
});

//START THE SERVER:
let hostname = "localhost";
app.listen(port, (req, res) => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
