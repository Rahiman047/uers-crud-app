import Navbar from "../Navbar";
import "./index.css";
import {useState,useEffect} from 'react'
import RenderData from "../RenderData";
import axios from "axios";

function Home(){
    const [usedData,changeData] = useState([])

    useEffect(()=>{
        getUserData()
    }, [])                     //Always pass empty array as second argument in order to prevent the infinite loop and to run useEffect only when mounted

    const getUserData = async () =>{
        const response = await axios.get("http://localhost:5000")          //Getting the Data Initially
        const gotData = await response.data
        changeData(gotData)
    }

    const getUserDeleteVal = async (id) =>{
        const response = await axios.delete(`http://localhost:5000/user/${id}`)     //After deleting the User again we have to Call getUserData() function.
        if(response.status === 200){
            getUserData()
        }
    }

    return(
        <div>
            <Navbar/>
            <div className="home-tab-eles">
                <div className="home-tab-menu">
                    <p className="home-tab-para">Name</p>
                    <p className="home-tab-para">Email</p>
                    <p className="home-tab-para">Contact</p>
                    <p className="home-tab-para">Action</p>
                </div>
                <div>
                    {usedData.map((eachItem) => {
                        return <RenderData key={eachItem.id} name={eachItem.name} email={eachItem.email} contact={eachItem.contact} id={eachItem.id} getUserDeleteVal={getUserDeleteVal}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home