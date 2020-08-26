const fs = require("fs")

let { EMAIL_GMAIL } = process.env;

let email = `${EMAIL_GMAIL}`;

if (email === "prueba@prueba.com") {
  fs.writeFile("prueba.txt", "Hello world ... Ana", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
