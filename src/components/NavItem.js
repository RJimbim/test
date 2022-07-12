import { useState } from "react"
import "./nav.css"

export default function NavItem({item}){
    const [open, setOpen] = useState(-1)
    // const [press, setPress] = useState(-1)

    
    if(item.submeniu){
        return (
            
            <div className={open === item.index? "sidebar-item open" : "sidebar-item"} onClick={() => setOpen(item.index)} onMouseLeave={() => setOpen(-1)}>
                <div className="sidebar-title">
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span> 
                    {/* <i className="bi-chevron-down toggle-btn"></i> */}
                </div>
                <div className="sidebar-content">
                    { item.submeniu.map((sub, index) => <NavItem key={index} item={sub} />) }
                </div>
            </div>
            
               
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {/* { item.icon && <i className={item.icon}></i> } */}
                {item.title} <img src={item.photo} />
            </a>
        )
    }
}