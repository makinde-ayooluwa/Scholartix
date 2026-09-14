import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"
export default function Header({showButton = true}) {
    return <div className="w-full bg-white">
        <div className="flex justify-between p-2">
            <img src={Logo} alt="NaviSchool Logo" width={80} />
            {showButton && <Link to={"/auth"}>
                <button className="bg-green-600 cursor-pointer text-white p-3 rounded-[30px] font-bold text-center">
                    <i className="bi bi-box-arrow-right px-1"></i>
                    <span>Login / Register</span>
                </button>
            </Link>
            }
        </div>
    </div>
}