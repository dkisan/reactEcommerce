import { useReducer } from "react"
import Ecomctx from "./Ecomctx"

const idToken = localStorage.getItem('idToken')

const initialstate = {
    product: [

        {

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {

            title: 'Blue Color',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

    ],
    cart: [],
    idToken: idToken,
    totalamount: 0,
    noofcartitem: 0
}

const ecomreducer = (state, action) => {

    if (action.type === 'addtocart') {

        let crudurl = 'https://crudcrud.com/api/c09bffc67e324b0da348021c800d5442'
        let email = localStorage.getItem('eemail').split('@')

        const isPresent = state.cart.findIndex(c => c.title === action.item.title)
        let noofcartitem = state.noofcartitem + 1
        if (isPresent >= 0) {
            // alert('The item is already added to cart')
            const update = [...state.cart]
            let quantity = update[isPresent].quantity + 1
            update[isPresent] = { ...update[isPresent], quantity: quantity }

            fetch(`${crudurl}/${email[0]}`, {
                method: 'POST',
                body: JSON.stringify(update),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'no-cors'
            })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data)
                })
                .catch(err => {
                    console.log(err.message)
                    return
                })


            return {
                product: state.product,
                cart: update,
                idToken: state.idToken,
                totalamount: state.totalamount + +action.item.price,
                noofcartitem: noofcartitem
            }
        }
        let cartT = state.cart.concat(action.item)
        fetch(`${crudurl}/${email[0]}`, {
            method: 'POST',
            body: JSON.stringify(cartT),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'no-cors'
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err.message)
                return
            })

        return {
            product: state.product,
            cart: state.cart.concat(action.item),
            idToken: state.idToken,
            totalamount: state.totalamount + +action.item.price,
            noofcartitem: noofcartitem
        }
    }

    if (action.type === 'addToken') {
        localStorage.setItem('idToken', action.token)
        return {
            product: state.product,
            cart: state.cart,
            idToken: action.token,
            totalamount: state.totalamount,
            noofcartitem: state.noofcartitem
        }
    }


}

const EcomctxProvider = (props) => {
    const [ecomctx, dispatch] = useReducer(ecomreducer, initialstate)

    const addtocartHandler = (item) => {
        dispatch({ type: 'addtocart', item: item })
    }

    const addIdtoken = (token) => {
        dispatch({ type: 'addToken', token: token })
    }

    const ecomctxhandler = {
        product: ecomctx.product,
        cart: ecomctx.cart,
        totalamount: ecomctx.totalamount,
        idToken: ecomctx.idToken,
        noofcartitem: ecomctx.noofcartitem,
        addtocartHandler: addtocartHandler,
        addIdtoken: addIdtoken
    }

    return (
        <Ecomctx.Provider value={ecomctxhandler}>
            {props.children}
        </Ecomctx.Provider>
    )
}

export default EcomctxProvider;