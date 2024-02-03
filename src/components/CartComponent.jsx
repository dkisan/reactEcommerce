import { useContext } from "react"
import ReactDOM from "react-dom"
import Ecomctx from "../store/Ecomctx"


const Cartitem = (props) => {
    const c = props.c
    return (
        <tr className="border-bottom text-wrap">
            <td>
                <img width={60} src={c.imageUrl} />
                {c.title}</td>
            <td className="text-center">{c.price}</td>
            <td className="text-center">{c.quantity}
                <button className="p-1 bg-danger text-white rounded">remove</button>
            </td>
        </tr>
    )
}


const CartDisplay = (props) => {

    const ctx = useContext(Ecomctx)

    return (
        <div className="bg-dark text-white mx-1 position-fixed bottom-0 end-0 z-3 border p-2 w-25">
            <div className="p-2">
                <h2 className="text-center">Cart</h2>
                <button onClick={props.cartHandler} className="position-absolute text-danger bg-transparent p-1 rounded m-2 top-0 end-0">x</button>
                <table className="w-100">
                    <thead>
                        <tr className="border-bottom text-center text-wrap">
                            <th>ITEM</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ctx.cart.map((c, i) => {
                            return <Cartitem key={i} c={c} />
                        })}
                    </tbody>
                </table>
                <h4 className="text-end mb-5 ">Total : Rs {ctx.totalamount} /-</h4>
                <button className="position-absolute p-1 rounded m-2 bottom-0 end-0 bg-success text-white">PURCHASE</button>
            </div>
        </div>
    )
}



const CartComponent = (props) => {
    return (
        ReactDOM.createPortal(<CartDisplay cartHandler={props.cartHandler} />, document.getElementById('ovlay'))
    )
}

export default CartComponent;