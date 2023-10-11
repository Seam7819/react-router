import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <ul>
                <Link to= '/' >Home</Link>
                <Link to='/users'>Users</Link>
                <Link to= '/about' >About Us</Link>
                <Link to= '/contact' >Contact Us</Link>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/comments'}>Comments</Link>
                <Outlet></Outlet>
            </ul>
        </div>
    );
};

export default Navbar;