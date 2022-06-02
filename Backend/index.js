const express = require("express");
const app = express();
const connectDatabase = require('./connection');
const cors = require("cors");

/**
 * Import the Routes
 * Part 4 OF USING EXPRESS ROUTER
 * Part 1, 2 and 3 available in ./routes/auth
 */
const authRoute = require("./routes/auth");


const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const userRoute = require("./routes/users");


//connecting to database
connectDatabase.connectDatabase();

//Using Middleware express.json() to recongnize incoming request as a JSON Object
app.use(express.json());

app.use(cors());

/**
 * Use the Routes
 * Part 5 OF USING EXPRESS ROUTER
 * Part 1, 2 and 3 available in ./routes/auth
 */
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);



// *********************************************************test data************************************************

app.get("/api/test", (req, res) => {
    res.send("This is a test that our express is working fine");
    console.log("This is a test that our express is working fine");
});

app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});