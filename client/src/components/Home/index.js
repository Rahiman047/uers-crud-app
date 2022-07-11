import Navbar from "../Navbar";
import "./index.css";
import {useState,useEffect} from 'react'
function Home(){
    const [usedData,changeData] = useState([])

    useEffect(()=>{
        getUserData()
    })

    const getUserData = async () =>{
        const response = await fetch("http://localhost:5000")
        console.log(response)
    }

    return(
        <div>
            <Navbar/>
            <h1>This is Home Page</h1>
        </div>
    )
}

export default Home