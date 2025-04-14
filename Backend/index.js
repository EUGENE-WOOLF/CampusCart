const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
    res.send("The server is running");
});

app.post("/api/reviews", (req, res) => {
    console.log("Data Received:", req.body);
    // You would normally insert logic here to save req.body to your database
    res.status(200).json({ message: "Review received" });
});

mongoose.connect('mongodb+srv://eugenewoolf220205:N37rNbMNFRpGMCJF@cluster0.mcbfip2.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    app.listen(3000, () =>{
        console.log("The server is on at http://localhost:3000");
    });
    console.log("Connected to the database");
})
.catch((e) =>{
    console.log(e);
});
