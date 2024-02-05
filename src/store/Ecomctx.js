import React from "react";

const Ecomctx = React.createContext({
    cart: [],
    product: [],
    totalamount: 0,
    noofcartitem: 0,
    idToken: '',
    addtocartHandler: () => { },
    addIdtoken: () => { }
})

export default Ecomctx;