import Navbar from "../Navbar"
import {v4 as uuidv4} from "uuid"
import "./index.css"
import {useState} from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'           //In this project i used react v6 so in order to use history features i use useNavigate link here refer --- https://stackoverflow.com/questions/63471931/using-history-with-react-router-dom-v6 


function AddUser(){
    const [userName,setUserName] = useState("")        //if we give " " instead of "" i saw an placeholder error where placeholder value is visible only after backspace is given so always use ""
    const [userEmail,setUserEmail] = useState("")
    const [userContact,setUserContact] = useState("")
    const [userAdded,checkUser] = useState(false)        //To check if user added and to check for response/status.
    const [userUpdate,setUserfield] = useState(" ")
    const [credError,checkError] = useState(false)       //To check if user given all fields correctly.
    const navigate = useNavigate()                       //using navigate 

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
        setUserfield(data)
        if(user.status === 200){
            checkUser(true)
            checkError(false)

            setTimeout(() => {
                navigate("/")                                //we should use just navigate("pathname") instead of navigate.push()
            },1000)

        }else{
            checkUser(false)
        }
    }

    const formClicked = (event) =>{
        event.preventDefault()
        const newUser = {
            "name":userName,
            "email":userEmail,
            "contact":userContact,
            "id":uuidv4()
        }

        if(newUser.name === ""){
            checkError(true)
            checkUser(false)
        }
        else if(newUser.email === ""){
            checkError(true)
            checkUser(false)
        }else if(newUser.contact === ""){
            checkError(true)
            checkUser(false)
        }
        else{
            enterUser(newUser)
            setUserName("")
            setUserEmail("")
            setUserContact("")
        }
    }

    return(
        <div>
            <Navbar/>
            <form className="form-el" onSubmit={formClicked}>
                <div>
                    <p className="input-el-label">Name</p>
                    <input className="all-input-els" type="text" onChange={nameFieldChanged} value={userName} placeholder="Name ...."/>
                </div>
                <div>
                    <p className="input-el-label">Email</p>
                    <input className="all-input-els" type="email" onChange={emailFieldChanged} value={userEmail} placeholder="Email ...."/>
                </div>
                <div>
                    <p className="input-el-label">Contact No</p>
                    <input className="all-input-els" onChange={contactFieldChanged} value={userContact} placeholder="Enter Phone Number"/>
                </div>
                <div>
                    <button type="submit" className="button-el">Submit</button>
                </div>
            </form>
            {userAdded && <p className="user-updation">{`User ${userUpdate.name} added successfully`}</p>}
            {credError && <p className="user-updation">*All Fields Are Required</p>}
        </div>
    )
}

export default AddUser