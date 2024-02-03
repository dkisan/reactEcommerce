import Footer from "../Footer";
import Navigation from "../Navigation";

const Contactus = () => {
    return (
        <>
            <Navigation />
            <div className="mt-5">
                <form className="w-50 m-auto d-flex flex-column gap-2 p-5" action="">
                    <h4 className="text-center">Contact Us</h4>
                    <label htmlFor="">Name :</label>
                    <input type="text" />
                    <label htmlFor="">Email :</label>
                    <input type="email" name="" id="" />
                    <label htmlFor="">Phone Number :</label>
                    <input type="number" name="" id="" />
                    <button className="bg-success p-2 rounded">Contact us</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contactus;