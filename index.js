const fs = require("fs")

let { EMAIL_GMAIL } = process.env;

let email = `${EMAIL_GMAIL}`;

if (email === "ccrlawyers@gmail.com") {
  fs.writeFile("prueba.txt", "Hello world ... Carlos", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
