// Getting the express router
/**
 * Part 1 OF USING EXPRESS ROUTER
 */
const router = require("express").Router();

// Importing the user model
const User = require("../models/User");

const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

/**
 * Part 2 OF USING EXPRESS ROUTER
 */
//REGISTER: using post method using router of express.
router.post("/register", async (req, res) => {
    // Making a new user using body data. Use aysnc await as data may not be saved if we have bad internet connection
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            // A secrect key to encrypt that we also require to decrypt
            "process.env.PASS_SEC"
        ).toString()
    });

    try {
        const savedUser = await newUser.save();
        // If success send all good response and saved user
        res.status(201).json(savedUser);
    } catch (err) {
        // If fails send the err with internal server err connection
        res.status(500).json(err);
    }
});



//LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong User Name");
        console.log(user);

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            "process.env.PASS_SEC"
        );

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;

        originalPassword !== inputPassword &&
            res.status(401).json("Wrong Password");

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            "process.env.JWT_SEC",
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err);
    }

});




/**
 * Export the router
 * Part 3 OF USING EXPRESS ROUTER
 */
module.exports = router;