import Navbar from "../Navbar";
import "./index.css";
import {useState,useEffect} from 'react'
import axios from "axios";

function Home(){
    const [usedData,changeData] = useState([])

    useEffect(()=>{
        getUserData()
    })

    const getUserData = async () =>{
        const response = await axios.get("http://localhost:5000")
        console.log(response.data)
    }

    return(
        <div>
            <Navbar/>
            <h1>This is Home Page</h1>
        </div>
    )
}

export default Home