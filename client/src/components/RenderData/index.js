import "./index.css"

function RenderData({name,email,contact}){
    
    return(
        <div>
            <p>{name}</p>
            <p>{contact}</p>
            <p>{email}</p>
        </div>
    )
}

export default RenderData