import { useReducer } from "react"
import Ecomctx from "./Ecomctx"

const initialstate = {
    cart: [],
    totalamount: 0,
    noofcartitem: 0
}

const ecomreducer = (state, action) => {

    if (action.type === 'addtocart') {
        const isPresent = state.cart.findIndex(c => c.title === action.item.title)
        let noofcartitem = state.noofcartitem + 1
        if (isPresent >= 0) {
            // alert('The item is already added to cart')
            const update = [...state.cart]
            let quantity = update[isPresent].quantity + 1
            update[isPresent] = { ...update[isPresent], quantity: quantity }
            return {
                cart: update,
                totalamount: state.totalamount + +action.item.price,
                noofcartitem: noofcartitem
            }
        }
        return {
            cart: state.cart.concat(action.item),
            totalamount: state.totalamount + +action.item.price,
            noofcartitem: noofcartitem
        }
    }


}

const EcomctxProvider = (props) => {
    const [ecomctx, dispatch] = useReducer(ecomreducer, initialstate)

    const addtocartHandler = (item) => {
        dispatch({ type: 'addtocart', item: item })
    }

    const ecomctxhandler = {
        cart: ecomctx.cart,
        totalamount: ecomctx.totalamount,
        noofcartitem: ecomctx.noofcartitem,
        addtocartHandler: addtocartHandler
    }

    return (
        <Ecomctx.Provider value={ecomctxhandler}>
            {props.children}
        </Ecomctx.Provider>
    )
}

export default EcomctxProvider;