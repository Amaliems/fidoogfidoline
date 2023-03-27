import { NavLink } from "react-router-dom";

export default function Nav(){
    return(
        <nav className="globalnavigation">
            <NavLink to="/">Forside</NavLink>
            <NavLink to="/">Prisliste</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Booking</NavLink>
            <NavLink to="/">Om os</NavLink>
        </nav>
    )
}

