const fs = require("

let { EMAIL_GMAIL } = process.env;

let email = `${EMAIL_GMAIL}`;

if (email === "ccrlawyers@gmail.com") {
  fs.writeFile("prueba.txt", "Hello world ... Yuliya", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
