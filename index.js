const fs = require("fs")

let { EMAIL_GMAIL } = process.env;

let email = `${EMAIL_GMAIL}`;

if (email === "prueba@prueba.com") {
  fs.writeFile("prueba.txt", "Hello world ... e2517", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
