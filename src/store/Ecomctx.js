import React from "react";

const Ecomctx = React.createContext({
    cart: [],
    product: [],
    totalamount: 0,
    noofcartitem: 0,
    idToken: null,
    addtocartHandler: () => { },
    addIdtoken: () => { }
})

export default Ecomctx;