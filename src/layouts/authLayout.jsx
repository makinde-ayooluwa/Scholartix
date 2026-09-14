
import { useState } from "react"
import AuthImage from "../assets/images/boy-holding-book.png"
import Login from "../pages/login"
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
                    {auth == "register" && <h1>Register</h1>}
                    {auth == "forgot-password" && <h1>Forgot password</h1>}
                </div>
            </div>
        </>
    )
}