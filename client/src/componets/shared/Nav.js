import {NavLink} from "react-router-dom"

export default function Nav(){

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mobile-games">mobile Games</NavLink>
            <NavLink to="/add-game">Add Game</NavLink>
        </nav>
    )
}