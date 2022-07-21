import '../css/Header.css'
import { NavLink } from 'react-router-dom'


export const Header = () => {
  
    
    return (
        <>
            <div className="Header">
                    <div id="heading">
                        Food and Drink
                    </div>
                    <div id="nav-bar">
                        <div><NavLink className="link" to="/">Home</NavLink></div>
                        <div><NavLink className="link" to="/food">Food</NavLink></div>
                        <div><NavLink className="link" to="/drink">Drink</NavLink></div>
                    </div>
            </div>
        </>
    )
}
