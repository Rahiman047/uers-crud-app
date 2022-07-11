import { Link } from "react-router-dom"
import './index.css'

function Navbar(){

    return(
        <div className="nav-con">
            <div>
                <h1 className="nav-heading">Crud-App</h1>
            </div>
            <div className="nav-el">
                <Link to="/home" className="basic-style">
                    Home
                </Link>
                <Link to="/adduser" className="basic-style">
                    AddUser
                </Link>
                <Link to="/about" className="basic-style">
                    About
                </Link>
            </div>
        </div>
        
    )

}

export default Navbar