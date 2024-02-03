import { useState } from "react";
import CartComponent from "../CartComponent";
import Footer from "../Footer";
import Generics from "../Generics";
import Navigation from "../Navigation";
import Products from "../Products";

const Home = () => {
    const [showCart, setShowCart] = useState(false)
    const cartHandler = () => {
        setShowCart(prev => !prev)
    }
    return (
        <>
            {showCart && <CartComponent cartHandler={cartHandler}/>}
            <Navigation cartHandler={cartHandler} />
            <Generics />
            <Products />
            <Footer />
        </>
    )
}

export default Home;