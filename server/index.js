const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use(express.static("build"));

app.post('/checkout', (req, res) => {
    console.log(req.body.books);
    console.log(req.body.books.includes("The Web Application Hacker's Handbook"));
    console.log(req.body.price === 0)
    if(req.body.books.includes("The Web Application Hacker's Handbook") && req.body.price === 0){
        res.send("RSA{083ca5d909c9b1505add4c96103c3e54}");
    }
    else if(req.body.price === 0 && req.body.books.length !== 0){
        res.send('Giveaways aren\'t for all books in the library.');
    } else {
        res.send("Checkout successful!");
    }
})

app.listen(3000, ()=> {
    console.log("Server listening on port 3000");
})