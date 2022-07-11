import Navbar from "../Navbar"
import {v4 as uuidv4} from "uuid"
import "./index.css"
import {useState} from "react"
import axios from "axios"

function AddUser(){
    const [userName,setUserName] = useState(" ")
    const [userEmail,setUserEmail] = useState(" ")
    const [userContact,setUserContact] = useState(" ")

    const nameFieldChanged = (e) =>{
        setUserName(e.target.value)
    }

    const emailFieldChanged = (e) =>{
        setUserEmail(e.target.value)
    }

    const contactFieldChanged = (e) =>{
        setUserContact(e.target.value)
    }

    const enterUser = async (data) =>{
        const user = await axios.post("http://localhost:5000/user",data)
    }

    const formClicked = (event) =>{
        event.preventDefault()
        const newUser = {
            "name":userName,
            "email":userEmail,
            "contact":userContact,
            "id":uuidv4()
        }
        enterUser(newUser)
    }


    return(
        <div>
            <Navbar/>
            <form className="form-el" onSubmit={formClicked}>
                <div>
                    <p className="input-el-label">Name</p>
                    <input className="all-input-els" type="name" onChange={nameFieldChanged} value={userName}/>
                </div>
                <div>
                    <p className="input-el-label">Email</p>
                    <input className="all-input-els" type="email" onChange={emailFieldChanged} value={userEmail}/>
                </div>
                <div>
                    <p className="input-el-label">Contact No</p>
                    <input className="all-input-els" onChange={contactFieldChanged} value={userContact}/>
                </div>
                <div>
                    <button type="submit" className="button-el">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser