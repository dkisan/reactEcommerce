import { useContext } from "react";
import Ecomctx from "../store/Ecomctx";
import { Link } from "react-router-dom";

const ProductList = (props) => {

    const ctx = useContext(Ecomctx)

    const addCart = () => {
        const item = {
            title: props.p.title,
            price: props.p.price,
            quantity: 1
        }
        ctx.addtocartHandler(item)
    }


    return (
        <div className="p-2">
            <Link to={`/prod/${props.p.title}`}>
                <h5 className="text-white text-center">{props.p.title}</h5>
                <img src={props.p.imageUrl} />
            </Link>
            <div className="d-flex justify-content-between p-1">
                <span className="text-white">Rs. {props.p.price} /-</span>
                <button onClick={addCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductList;