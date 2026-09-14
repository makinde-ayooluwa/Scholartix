import Logo from "../assets/images/logo.png"
export default function Header() {
    return <div className="w-full bg-white">
        <div className="flex justify-between p-2">
            <img src={Logo} alt="NaviSchool Logo" width={80} />
            <button className="bg-green-600 text-white p-3 rounded-[30px] font-bold w-27.5 text-center">
                <i className="bi bi-box-arrow-right px-1"></i>
                <span>Login</span>
            </button>
        </div>
    </div>
}