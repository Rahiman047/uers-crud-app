const express = require("express")
const {v4:uuid, v4} = require("uuid")
const cors = require("cors")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")                  //importing the mongoose after installing using npm

const app = express()                                  
app.use(cors())                                       //Always install and use cors and body-parser in express projects
app.use(bodyparser.json())

mongoose.connect("mongodb://localhost:27017/crud",{useNewUrlParser:"true"})       //Connecting to Mongoose database called crud if not present it adds new DB called crud

mongoose.connection.on("error",er =>{                 //If error in connection it logs 
    console.log(er)
})

mongoose.connection.on("connected",(err,res)=>{      //If DB is connected it logs
    console.log("Mongoose is connected")
})

const userCrud = new mongoose.Schema({               // we should create scheme first before creating a model 
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true,
    }
})

const Crud = new mongoose.model("crud",userCrud)                   //After creating a schema we should use model.


let users = []                                         //Always use let so that while using delete functionality it does not show assignment to constamt variable error

app.get("/",(req,res)=>{                               // view all Users
    res.send(users)
    getDocs
})


const createDocument = async(user) =>{                  //function to add new User to Mongoose.
    const newUserData = new Crud({
        name:user.name,
        email:user.email,
        contact:user.contact,
        id:user.id
    })
    const res = await newUserData.save()
    console.log(res)
}


app.post("/user",(req,res)=>{                            //Adding a new User
    const user = req.body 
    users.push({...user, id:v4()})
    console.log(user.id)
    res.send("User added successfully")
    createDocument(user)                                 //calling a create document function to add New User to mongoose.
})

app.put("/users/:id",(req,res) =>{
    const user = users.find((eachUser) => eachUser.id === req.params.id)    //update a existing User
    user.name = req.body.name,
    user.email = req.body.email,
    user.contact = req.body.contact

    res.send("user updated Successfully.")
})

app.delete("/user/:id",(req,res) =>{
    users = users.filter((eachUser) => eachUser.id !== req.params.id)       //deleting a user
    res.send("User Deleted Successfully")
})

app.listen(5000,()=>{
    console.log("http://localhost:5000")
})

