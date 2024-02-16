import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "src/components";

function Layout() {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-skin-senary text-skin-tertiary">
        <Navbar />
        <div>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout