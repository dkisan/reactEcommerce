import ProductList from "./ProductList";

const Products = () => {

    const productsArr = [

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

    ]



    return (
        <div className="container-fluid bg-dark p-5">
            <h5 className="text-white text-center">Music</h5>
            <div className="d-flex justify-content-center input-group gap-3 w-50 m-auto">
                {productsArr.map((p, i) => {
                    return <ProductList p={p} key={i} />
                })}
            </div>
        </div>
    )
}

export default Products;