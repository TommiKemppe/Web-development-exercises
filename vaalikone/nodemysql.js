var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var testiVar1 = "alkuArvo";

var con = mysql.createConnection({
    host:"",
    user:"",
    password:""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})
con.query("USE opisk_t9keto00", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
})

con.query("SELECT * from Tili", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
})

con.query("SELECT pankki from Tili WHERE id_tili = 1", function (err, result) {
    if (err) throw err;
    console.log(result);
    testiVar1 = result[0].pankki;
    console.log(testiVar1);
})

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/example', (req, res) => {
    res.send(`Valinta on: ${req.body.kysymys1}.`);
});

const port = 80;

app.listen(port, () => {
    console.log('Server running on port ${port}');
});

/*
function setValue(value){
    testiVar1 = value[0].pankki;
    console.log(testiVar1);
}
*/
/*
function testFunction()
{
    document.getElementById("testFunctionParagraph").innerHTML = testiVar1;
}
*/

con.end();
