import { useContext } from "react";
import Ecomctx from "../store/Ecomctx";

const CartButton = (props)=>{
    const ctx = useContext(Ecomctx)

    return(
        <div className="position-absolute top-0 end-0 m-1">
            <button onClick={props.cartHandler}>Cart<span className="fs-4">{ctx.noofcartitem}</span></button>
        </div>
    )
}

export default CartButton;