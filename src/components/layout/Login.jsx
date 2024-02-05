import { useContext, useRef } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import { useNavigate } from "react-router-dom";
import Ecomctx from "../../store/Ecomctx";

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const ctx = useContext(Ecomctx)

    const loginHandler = (event) => {
        event.preventDefault()

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAY6PIq34nDju030WEkLJCKVdKmx_39C68'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async res => {
                if (res.ok) {
                    const data = await res.json()
                    localStorage.setItem('eemail',emailRef.current.value)
                    ctx.addIdtoken(data.idToken)
                    navigate('/store')

                } else {
                    return res.json().then(data => {
                        alert(data.error.message)
                    })
                }
            })
    }
    return (
        <>
            <Navigation />
            <div className="mt-5">
                <form className="w-50 m-auto d-flex flex-column gap-2 p-5" action="" onSubmit={loginHandler}>
                    <h4 className="text-center">Login</h4>
                    <label htmlFor="">Email :</label>
                    <input ref={emailRef} type="email" name="" id="" />
                    <label htmlFor="">Password :</label>
                    <input ref={passwordRef} type="password" name="" id="" />
                    <button className="bg-success p-2 rounded">Login</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Login;