
import items from "./NavData.json"
import NavItem from "./NavItem"
import "./nav.css"


export default function Nav(){
    return (
        <div className="sidebar">
          { items.map((item, index) => <NavItem key={index} item={item} />) }
        </div>
    )
}