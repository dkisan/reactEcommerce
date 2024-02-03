import React from "react";

const Ecomctx = React.createContext({
    cart: [],
    product:[],
    totalamount: 0,
    noofcartitem: 0,
    addtocartHandler: () => { }
})

export default Ecomctx;