import "./index.css"
import {FaEdit} from "react-icons/fa"
import {MdDelete} from 'react-icons/md'
import {Link} from 'react-router-dom'

function RenderData({name,email,contact,id,getUserDeleteVal}){

    const userDelete = () =>{
        if(window.confirm("Are you sure to delete this record")){
            getUserDeleteVal(id)
        }
    }

    return(
        <div className="render-data">
            <p className="render-data-el">{name}</p>
            <p className="render-data-el">{email}</p>
            <p className="render-data-el">{contact}</p>
            <div className="render-button-el">
                <Link to={`/users/${id}`}>
                    <button className="render-buttons"><FaEdit/></button>
                </Link>
                <div>
                    <button className="render-buttons" onClick={userDelete}><MdDelete/></button>
                </div>
            </div>
        </div>
    )
}

export default RenderData