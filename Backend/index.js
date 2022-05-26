const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const connectDatabase = require('./connection');

/**
 * Import the Routes
 * Part 4 OF USING EXPRESS ROUTER
 * Part 1, 2 and 3 available in ./routes/auth
 */
const authRoute = require("./routes/auth");

//connecting to database
connectDatabase.connectDatabase();

//Using Middleware express.json() to recongnize incoming request as a JSON Object
app.use(express.json());

/**
 * Use the Routes
 * Part 5 OF USING EXPRESS ROUTER
 * Part 1, 2 and 3 available in ./routes/auth
 */
app.use("/api/auth", authRoute);



// *********************************************************test data************************************************

app.get("/api/test", (req, res) => {
    res.send("This is a test that our express is working fine");
    console.log("This is a test that our express is working fine");
});

app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});