const express=require("express")
const app=express();
const mongoose=require("mongoose");
app.use(express.json());
const bcrypt = require("bcryptjs")


const mongourl = 'mongodb+srv://admin:admin@fixpaw.dmszyc6.mongodb.net/?retryWrites=true&w=majority&appName=FixPaw'

mongoose
.connect(mongourl)
.then(()=>{
    console.log("connected to db")
})
.catch((e)=>{
 console.log(e);
});

require('./UserDetails')

const User = mongoose.model("UserInfo");

app.get('/',(req,res) =>{
    res.send({status:"Started"})
})

app.post('/register',async(req,res)=>{
    const {email,password} = req.body;

    const oldUser = await User.findOne({email:email});

    if(oldUser){
        return res.send({data:"User already exists"});
    }

    const encryptedPassword = await bcrypt.hash(password,10)

    try{
        await User.create({
            email:email,
            password:password
        })
        res.send({status:"ok", data:"User created"});
    }catch(e){
        res.send({status:"Wrong", data:error});
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email, password: password });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.send({status:"ok", data:"User logged"});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(5001,()=>{
    console.log("Server on")
})