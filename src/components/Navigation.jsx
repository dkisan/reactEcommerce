import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";

const Navigation = (props) => {
    return (
        <div className="container-fluid bg-dark p-2 position-fixed top-0">
            <ul className="list-inline text-white text-center">
                <li className="list-inline-item px-4"><NavLink to={'/'} className={nav => nav.isActive ? 'link-opacity-100 ':'text-white nav-link fw-bold'}>HOME</NavLink></li>
                <li className="list-inline-item px-4"><NavLink to={'/store'} className={nav => nav.isActive ? 'link-opacity-100 fw-bold':'text-white nav-link fw-bold'}>STORE</NavLink></li>
                <li className="list-inline-item px-4"><NavLink to={'/about'} className={nav => nav.isActive ? 'link-opacity-100 fw-bold':'text-white nav-link fw-bold'}>ABOUT</NavLink></li>
                <li className="list-inline-item px-4"><NavLink to={'/contactus'} className={nav => nav.isActive ? 'link-opacity-100 fw-bold':'text-white nav-link fw-bold'}>CONTACT US</NavLink></li>
            </ul>
            <CartButton cartHandler={props.cartHandler} />
        </div>
    )
}

export default Navigation;