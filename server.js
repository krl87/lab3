/**
 * Created by Kayley on 2016-01-27.
 */

//linking to the connect module
var connect = require('connect');

//linking to the url module
var url = require('url');

//creating app using connect
var app = connect();

// creating function for math in the url
var calculator = function (req, res, next) {

    //getting the subtotal for the url querystring
    var qs = url.parse(req.url, true).query;

    //get method and define variables
    var method = qs.method;

    var x = qs.x;

    var y = qs.y;

    //if user puts in addition
    if (method == 'add') {
        var total = parseFloat(x) + parseFloat(y);

        res.writeHead(200, {
            "Content-Type": "text-plain"
        });

        res.write(x + " + " + y + " = " + total);

        res.end();
    }
    //if user puts in subtraction
    if (method == 'subtract') {
        var total = parseFloat(x) - parseFloat(y);

        res.writeHead(200, {
            "Content-Type": "text-plain"
        });

        res.write(x + " - " + y + " = " + total);

        res.end();
    }
    //if user puts in multiplication
    if (method == 'multiply') {
        var total = parseFloat(x) * parseFloat(y);

        res.writeHead(200, {
            "Content-Type": "text-plain"
        });

        res.write(x + " * " + y + " = " + total);

        res.end();
    }
    
    //if user puts in division
    if (method == 'divide') {
        var total = parseFloat(x) / parseFloat(y);

        res.writeHead(200, {
            "Content-Type": "text-plain"
        });

        res.write(x + " / " + y + " = " + total);

        res.end();
    }

    //write error message for wrong querystring
    else {
        res.writeHead(200, {
            "Content-Type": "text-plain"
        });

        res.write("Please try again with the url http://localhost:3000/lab3?method=add&x=16&y=4");
        res.end();
    }
}

//send to url
app.use('/lab3', calculator);

//listen for events
app.listen(3000);
console.log('connected at http://localhost:3000');