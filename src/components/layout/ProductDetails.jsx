import { useContext } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import Ecomctx from "../../store/Ecomctx";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const ctx = useContext(Ecomctx)

    const p = useParams()

    const prodIdx = ctx.product.findIndex(c => c.title === p.p)
    const prod = ctx.product[prodIdx]

    return (
        <>
            <Navigation />
            <div className="mt-5">
                <div className="w-50 m-auto p-4 d-flex">
                    <img src={prod.imageUrl} alt="" />
                    <div className="d-flex flex-column mx-5">
                        <h4>{prod.title} </h4>
                        <h6>Price : Rs. {prod.price} /-</h6>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails;