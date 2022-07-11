const express = require("express")
const {v4:uuid, v4} = require("uuid")
const cors = require("cors")
const bodyparser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyparser.json())


let users = []                                         //Always use let so that while using delete functionality it does not show assignment to constamt variable error

app.get("/",(req,res)=>{                               // view all Users
    res.send(users)
})

app.post("/user",(req,res)=>{                            //Adding a new User
    const user = req.body 
    users.push({...user, id:v4()})
    res.send("User added successfully")
})

app.get("/user/:id",(req,res)=>{
    const user = users.filter((eachUser) => eachUser.id === req.params.id)   //view a particular user
    res.send(user)
})

app.put("/user/:id",(req,res) =>{
    const user = users.find((eachUser) => eachUser.id === req.params.id)    //update a existing User
    user.name = req.body.name,
    user.email = req.body.email,
    user.contact = req.body.contact

    res.send("user updated Successfully.")
})

app.delete("/user/:id",(req,res) =>{
    users = users.filter((eachUser) => eachUser.id !== req.params.id)       //deleting a new user
    res.send("User Deleted Successfully")
})

app.listen(5000,()=>{
    console.log("http://localhost:5000")
})

