import { Link, Outlet } from "react-router-dom"


const Admin_Rootpage = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-[#5e464a] text-base-content min-h-full w-80 p-4">
                    <Link to={'/'}>
                        <li className="bg-white text-black text-bold rounded-xl py-3 text-center">E-Chocolate</li>
                    </Link>
                    <Link className="text-white" to={'panel'}><li><a>Dashboard</a></li></Link>
                    <Link className="text-white" to={'category'}><li><a>Categories</a></li></Link>
                    <Link className="text-white" to={'orders'}><li><a>Orders</a></li></Link>
                    <Link className="text-white" to={'products'}><li><a>Products</a></li></Link>
                    <Link className="text-white" to={'users'}><li><a>Users</a></li></Link>
                    <Link className="text-white" to={'/'}><li><a>Homepage</a></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Admin_Rootpage
