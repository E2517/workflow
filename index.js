const fs = require("fs");

let { EMAIL_GMAIL } = process.env;

let password = `${EMAIL_GMAIL}`;

if (password === "ccrlawyers@gmail.com") {
  fs.writeFile("prueba.txt", "Hello world!", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
