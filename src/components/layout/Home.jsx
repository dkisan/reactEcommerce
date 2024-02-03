import Footer from "../Footer";
import Generics from "../Generics";
import Navigation from "../Navigation";

const Home = () => {

    return (
        <>
            <Navigation />
            <Generics />
            <div className="bg-dark text-white">
                <table className="table w-50 m-auto table-dark">
                    <tbody>
                        <tr>
                            <td>JUL16</td>
                            <td>DETROIT, MI</td>
                            <td>DTE ENERGY MUSIC THEATRE</td>
                            <td><button className="bg-success text-white px-2">BUY TICKETS</button></td>
                        </tr>
                        <tr>
                            <td>JUL19</td>
                            <td>TORONTO,ON</td>
                            <td>BUDWEISER STAGE</td>
                            <td><button className="bg-success text-white px-2">BUY TICKETS</button></td>
                        </tr>
                        <tr>
                            <td>JUL22</td>
                            <td>BRISTOW, VA</td>
                            <td>JIGGY LUBE LIVE</td>
                            <td><button className="bg-success text-white px-2">BUY TICKETS</button></td>
                        </tr>
                        <tr>
                            <td>JUL29</td>
                            <td>PHOENIX, AZ</td>
                            <td>AK-CHIN PAVILION</td>
                            <td><button className="bg-success text-white px-2">BUY TICKETS</button></td>
                        </tr>
                        <tr>
                            <td>AUG2</td>
                            <td>LAS VEGAS, NV</td>
                            <td>T-MOBILE ARENA</td>
                            <td><button className="bg-success text-white px-2">BUY TICKETS</button></td>
                        </tr>
                        <tr>
                            <td>AUG7</td>
                            <td>CONCORD, CA</td>
                            <td>CONCORD PAVILION</td>
                            <td><button className="bg-success text-white px-2">BUY TICKETS</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}

export default Home;