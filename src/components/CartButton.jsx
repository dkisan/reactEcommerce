const CartButton = (props)=>{
    return(
        <div className="position-absolute top-0 end-0 m-1">
            <button onClick={props.cartHandler}>Cart<span className="fs-4">0</span></button>
        </div>
    )
}

export default CartButton;