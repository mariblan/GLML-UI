import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "src/components";

function Layout() {
  return (
    <div>
        <Navbar />
        <div>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout