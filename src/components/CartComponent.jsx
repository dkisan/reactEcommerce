import ReactDOM from "react-dom"

const cartElements = [  

    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

    }

]




const CartDisplay = (props) => {
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
                        {cartElements.map((c, i) => {
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
                        })}
                    </tbody>
                </table>
                <h4 className="text-end mb-5 ">Total : Rs 1000 /-</h4>
                <button className="position-absolute p-1 rounded m-2 bottom-0 end-0 bg-success text-white">PURCHASE</button>
            </div>
        </div>
    )
}



const CartComponent = (props) => {
    return (
        ReactDOM.createPortal(<CartDisplay cartHandler={props.cartHandler}/>, document.getElementById('ovlay'))
    )
}

export default CartComponent;