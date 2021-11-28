const fs = require("fs");
const $ = require("jquery");
let html = 
`<!DOCTYPE html>
<html>
    <head>
        <html lang="en"></html>
        <meta charset="utf-8" />
        <title>Team Up! The team profile generator</title>
        <link rel="stylesheet" href="../css/style.css">
    </head>
    <body>
        <h1>Team Up!</h1>
<main>`
let html2 = 
`<script
src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
crossorigin="anonymous"
referrerpolicy="no-referrer"
></script>
<script src="./render-profiles.js"></script>
</body>
</html>`

const generateHTML = function (engineers, interns, managers) {
    for(let i = 0; i < engineers.length; i++) {
        console.log(Engineer.name);
        // let card = `<div class = "card-container">
        // <div class = "card-header">
        //      <h2 class = "card-title">Role</h2>
        //      <h2 class = "card-title">${engineers.name}</h2>
        // </div>
        // <div class = "card-info">
        //  <p class = card-detail>Info 1</p>
        //  <p class = card-detail>Info 2</p>
        //  <p class = card-detail>info 3
        //  </p>
        // </div>
        // </div>`
        // html = html + card;  
    }
    // html = html + html2;
//         engineerCards = engineers.forEach(engineer, function (){

   
//     } );

    // fs.writeFileSync("./generate.html", html, (error) => 
    // error ? console.error(error) : console.info('cahapa la pachala!'));
}



module.exports = generateHTML;