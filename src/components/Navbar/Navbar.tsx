import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header>
        <nav>
            <img src="" alt="" />
        </nav>
        <nav>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/films'}>Films</NavLink></li>
                <li><NavLink to={'/series'}>Series</NavLink></li>
                <li><NavLink to={'/books'}>Books</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;