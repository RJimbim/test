import { useState } from "react"
import "./navs.css"

export default function Nam({item}){
    const [open, setOpen] = useState(-1)
    // const [press, setPress] = useState(-1)

    
    if(item.submeniu){
        return (
            <>
            <div className={open === item.index? "nav-card open" : "nav-card"} onClick={() => setOpen(item.index)} onMouseLeave={() => setOpen(-1)}>
                <div className="nav-card-title">
                    <span>
                        {item.title} prie korteles
                    </span> 
                    {/* <i className="bi-chevron-down toggle-btn"></i> */}
                </div>
                <div className={open === item.index? "nav-content open" : "nav-content"}>
                    { item.submeniu.map((sub, index) => <Nam key={index} item={sub} />) } labas vakaras
                </div> 
            </div>
           
            </>
               
        )
    }else{
        return (
            <div className="nav-card">
                
            <a href={item.path || "#"} className="nav-card-item">
                {/* { item.icon && <i className={item.icon}></i> } */}
                {item.title} <img className="nav-img" src={item.photo} />
            </a>
            </div>
        )
    }
}