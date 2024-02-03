const ProductList = (props)=>{
    
    return (
        <div className="p-2">
            <h5 className="text-white text-center">{props.p.title}</h5>
            <img src={props.p.imageUrl}/>
            <div className="d-flex justify-content-between p-1">
                <span className="text-white">{props.p.price}</span>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductList;