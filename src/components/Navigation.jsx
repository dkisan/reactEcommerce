import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";

const Navigation = (props) => {
    return (
        <div className="container-fluid bg-dark p-2 position-fixed top-0">
            <ul className="list-inline text-white text-center">
                <li className="list-inline-item px-4"><NavLink to={'/'} className='text-white nav-link fw-bold'>HOME</NavLink></li>
                <li className="list-inline-item px-4"><NavLink to={'/store'} className='text-white nav-link fw-bold'>STORE</NavLink></li>
                <li className="list-inline-item px-4"><NavLink to={'/about'} className='text-white nav-link fw-bold'>ABOUT</NavLink></li>
            </ul>
            <CartButton cartHandler={props.cartHandler} />
        </div>
    )
}

export default Navigation;