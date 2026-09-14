
import { useState } from "react"
import AuthImage from "../assets/images/boy-holding-book.png"
import Login from "../pages/login"
import Register from "../pages/register";
export default function AuthLayout() {
    const [auth, setAuth] = useState("login");
    return (
        <>
            <div className="grid md:grid-cols-2 h-screen">
                <div className="bg-blue-500 hidden md:flex align-middle justify-center">
                    <img className="justify-self-center" src={AuthImage} alt="" />
                </div>
                <div className="flex align-middle justify-center">
                    {auth == "login" && <Login setAuth={setAuth} />}
                    {auth == "register" && <Register setAuth={setAuth} />}
                    {auth == "forgot-password" && <ForgotPassword setAuth={setAuth} />}
                </div>
            </div>
        </>
    )
}