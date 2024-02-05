import { useContext, useEffect, useState } from "react";
import CartComponent from "../CartComponent";
import Footer from "../Footer";
import Generics from "../Generics";
import Navigation from "../Navigation";
import Products from "../Products";
import Ecomctx from "../../store/Ecomctx";
import { useNavigate } from "react-router-dom";

const Store = () => {
    const [showCart, setShowCart] = useState(false)
    const ctx = useContext(Ecomctx)
    const navigate = useNavigate()

    const cartHandler = () => {
        setShowCart(prev => !prev)
    }

    useEffect(() => {
        if (!ctx.idToken) {
            navigate('/login')
        }
    })
    return (
        <>
            {showCart && <CartComponent cartHandler={cartHandler} />}
            <Navigation cartHandler={cartHandler} />
            <Generics />
            <Products />
            <Footer />
        </>
    )
}

export default Store;