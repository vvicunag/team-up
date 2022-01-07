const fs = require("fs");
const $ = require("jquery");
const { engineers } = require("../index");
const Engineer = require("../lib/engineer.js");

let html = `<!DOCTYPE html>
<html>
    <head>
        <html lang="en"></html>
        <meta charset="utf-8" />
        <title>Team Up! The team profile generator</title>
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <h1>Team Up!</h1>
<main>`;
let html2 = `<script
src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
crossorigin="anonymous"
referrerpolicy="no-referrer"
></script>
<script src="./render-profiles.js"></script>
</body>
</html>`;

const generateHTML = (engineers, interns, managers) => {
  managers.map((manager) => {
    let managerCard = `<div class = "card-container">
        <div class = "card-header">
        <h2 class = "card-title">Manager</h2>
        <h2 class = "card-title">${manager.name}</h2>
        </div>
        <div class = "card-info">
        <p class = card-detail>ID: ${manager.id}</p>
        <p class = card-detail>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class = card-detail>Office number: ${manager.officeNumber}</p>        </div>
        </div>`;
    html = html + managerCard;
  });
  engineers.map((engineer) => {
    let engineerCard = `<div class = "card-container">
        <div class = "card-header">
        <h2 class = "card-title">Engineer</h2>
        <h2 class = "card-title">${engineer.name}</h2>
        </div>
        <div class = "card-info">
        <p class = card-detail>ID: ${engineer.id}</p>
        <p class = card-detail>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class = card-detail>Github: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>        </div>
        </div>`;
    html = html + engineerCard;
  });
  interns.map((intern) => {
    let internCard = `<div class = "card-container">
        <div class = "card-header">
        <h2 class = "card-title">Intern</h2>
        <h2 class = "card-title">${intern.name}</h2>
        </div>
        <div class = "card-info">
        <p class = card-detail>ID: ${intern.id}</p>
        <p class = card-detail>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class = card-detail>School: ${intern.school}</p>        </div>
        </div>`;
    html = html + internCard;
  });

  html = html + html2;

  fs.writeFileSync("./generate.html", html, (error) =>
    error ? console.error(error) : console.info("")
  );
  console.log(
    "Successfully generated HTML! Look for 'generate.html' in file directory"
  );
};
module.exports = generateHTML;
