
import items from "./NavData.json"
import NavItem from "./Nam"
import "./navs.css"


export default function Navs(){
    return (
        <div className="nav-container">
          { items.map((item, index) => <NavItem key={index} item={item} />) }
          kas cia
        </div>
    )
}