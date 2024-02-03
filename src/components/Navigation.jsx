import CartButton from "./CartButton";

const Navigation = () => {
    return (
        <div className="container-fluid bg-dark p-4">
            <ul className="list-inline text-white text-center">
                <li className="list-inline-item px-4">HOME</li>
                <li className="list-inline-item px-4">STORE</li>
                <li className="list-inline-item px-4">ABOUT</li>
            </ul>
            <CartButton />
        </div>
    )
}

export default Navigation;