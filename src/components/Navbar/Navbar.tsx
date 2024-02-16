import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="w-screen flex flex-row justify-around border-b-2 border-skin-success">
        <nav className="flex flex-row w-1/3" >
            <NavLink to={'/'}><img className="w-16" src="https://t4.ftcdn.net/jpg/01/10/56/29/360_F_110562913_yoxjxxD24VidOWpbjfektgs2PV4EroPf.jpg" alt="" /></NavLink>
        </nav>
        <nav className=" w-2/3 flex flex-row items-center">
            <ul className="w-full flex flex-row justify-around">
                <li className="w-1/5 font-bold"><NavLink className={({isActive}) => isActive ? 'text-skin-warning' : 'text-skin-secondary'} to={'/'}>Home</NavLink></li>
                <li className="w-1/5 font-bold"><NavLink className={({isActive}) => isActive ? 'text-skin-success' : 'text-skin-secondary'} to={'/films'}>Films</NavLink></li>
                <li className="w-1/5 font-bold"><NavLink className={({isActive}) => isActive ? 'text-skin-success' : 'text-skin-secondary'} to={'/series'}>Series</NavLink></li>
                <li className="w-1/5 font-bold"><NavLink className={({isActive}) => isActive ? 'text-skin-success' : 'text-skin-secondary'} to={'/books'}>Books</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;