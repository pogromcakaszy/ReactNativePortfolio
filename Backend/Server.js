const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
app.use(express.json());
const bcrypt = require("bcryptjs");
app.use(cors());

const mongourl = 'mongodb+srv://admin:admin@fixpaw.dmszyc6.mongodb.net/?retryWrites=true&w=majority&appName=FixPaw';

mongoose
    .connect(mongourl)
    .then(() => {
        console.log("connected to db");
    })
    .catch((e) => {
        console.log(e);
    });

require('./UserDetails');

const User = mongoose.model("UserInfo");

app.get('/', (req, res) => {
    res.send({ status: "Started" });
});

app.post('/register', async (req, res) => {
    const { username, email, firstName, lastName, phoneNumber, password } = req.body;

    const existUser = await User.findOne({ email: email });
    const existUser2 = await User.findOne({ username: username });

    if (existUser || existUser2) {
        return res.send({ data: "User already exists" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            password: encryptedPassword
        });
        res.send({ status: "ok", data: "User created" });
    } catch (error) {
        res.send({ status: "Wrong", data: error });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.send({ status: "ok", data: "User logged" });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(5001, () => {
    console.log("Server on");
});
