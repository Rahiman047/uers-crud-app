import { useParams } from "react-router-dom"
import {useEffect,useState} from 'react'
import axios from "axios"
import './index.css'
import Navbar from "../Navbar"


function Edit(){
    const {id} = useParams()    // To Get an ID from the URL parameter          
    const [userName,updatedUserName] = useState("")
    const [userEmail,updatedUserEmail] = useState("")
    const [userContact,updatedUserContact] = useState("")
    const [para,updatePara] = useState(false)
    const [userData,UpdatedUserData] = useState([])
    const [userAdded,checkUserAdded] = useState(false)


    useEffect(() =>{
        getSingleUser()
    },[id])



    const getSingleUser = async () =>{
        const response = await axios.get(`http://localhost:5000/user/${id}`)
        const resVal = await response.data
    }

    const updateSubmitUser = async (e) =>{
        e.preventDefault()
        if(userName !== "" & userEmail !== "" & userContact !== ""){
            const changedVal = {
                "name":userName,
                "email":userEmail,
                "contact":userContact,
                "id":id
            }
            UpdatedUserData(changedVal)
        }
        else{
            updatePara(true)
        }
        const response = await axios.put(`http://localhost:5000/users/${id}`,userData)
        if(response.status === 200){
            checkUserAdded(true)
            updatedUserName("")
            updatedUserEmail("")
            updatedUserContact("")
        }
    }


    const nameUpdate = (e) =>{
        updatedUserName(e.target.value)
    }

    const emailUpdate = (e) =>{
        updatedUserEmail(e.target.value)
    }

    const contactUpdate = (e) =>{
        updatedUserContact(e.target.value)
    }

    return(
        <div>
            <Navbar/>
            <form className="edit-val-page" onSubmit={updateSubmitUser}>
                <div className="edit-form-sec">
                    <label className='label-name'>Name</label>
                    <input type="text" placeholder="Name..." className="input-form-el" onChange={nameUpdate} value={userName}/>
                </div>
                <div className="edit-form-sec">
                    <label className='label-name'>Email</label>
                    <input type="email" placeholder="Email..." className="input-form-el" onChange={emailUpdate} value={userEmail}/>
                </div>
                <div className="edit-form-sec">
                    <label className='label-name'>Contact No..</label>
                    <input placeholder="Contact..." className="input-form-el" onChange={contactUpdate} value={userContact}/>
                </div>
                <div>
                    <button className="form-btn-edit" type="submit">
                        Update
                    </button>
                </div>
            </form>
            {para && <p className="error-para">*All Fields Required</p>}
            {userAdded && <p className="added-para">User Added Successfully</p>}
        </div>
    )

}

export default Edit