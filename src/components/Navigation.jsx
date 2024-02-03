import CartButton from "./CartButton";

const Navigation = (props) => {
    return (
        <div className="container-fluid bg-dark p-2 position-fixed top-0">
            <ul className="list-inline text-white text-center">
                <li className="list-inline-item px-4">HOME</li>
                <li className="list-inline-item px-4">STORE</li>
                <li className="list-inline-item px-4">ABOUT</li>
            </ul>
            <CartButton cartHandler={props.cartHandler}/>
        </div>
    )
}

export default Navigation;