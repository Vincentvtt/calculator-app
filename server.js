const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2
    res.send("Sum of the two numbers is " + result);
})

app.listen(3000, () => {
    console.log("Server started on port 3000.")
});
