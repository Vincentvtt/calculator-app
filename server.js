const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }))

// Simple addition calculator on home page

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2
    res.send("Sum of the two numbers is " + result);
})

// BMI Calculator on bmicalculator route

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const result = (weight/(height * height)).toFixed(2);
    res.send("Your BMI is " + result);
})

app.listen(3000, () => {
    console.log("Server started on port 3000.")
});
