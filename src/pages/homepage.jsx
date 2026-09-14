import Header from "../layouts/header";
import HeroImage from "../assets/images/hero.png"
import Footer from "../layouts/footer";
import { Link, Outlet, useNavigate } from "react-router-dom";
export default function Homepage() {
    const whyus = [
        {
            title: "Schools served",
            value: "39+"
        },
        {
            title: "Users",
            value: "14,651+"
        },
        {
            title: "Supports Available",
            value: "24/7"
        },
    ]
    return (
        <>
            <div className="w-full h-full">
                <Header />
                <div className="bg-blue-500">
                    <div className="grid md:grid-cols-2 p-4 align-middle">
                        <div className="p-3 md:mt-40">
                            <h1 className="text-white font-bold" style={{
                                fontSize: 50
                            }}>
                                One Platform. Your Entire School.
                            </h1>
                            <p className="text-gray-300" style={{
                                fontSize: 25,
                                letterSpacing: 1
                            }}>
                                From student records to fees, attendance, results, and communication — NaviSchool brings it all together.
                            </p>
                            <Link to={"/auth"}>
                                <button className="bg-green-600 text-white p-3 rounded-[30px] font-bold text-center mt-5 cursor-pointer">
                                    <i className="bi bi-box-arrow-right px-1"></i>
                                    <span>Login / Register</span>
                                </button>
                            </Link>
                        </div>
                        <div className="flex justify-center align-middle">
                            <img src={HeroImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="text-center p-10 mt-3">
                        <h1 className="text-blue-500 font-bold" style={{ fontSize: 30 }}>
                            Why Schools Choose NaviSchool
                        </h1>
                        <p style={{ fontSize: 15, lineHeight: 3 }}>
                            Trusted by educational institutions nationwide
                        </p>
                        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
                            {whyus.map(({ title, value }) => (
                                <div>
                                    <div className="shadow-2xl w-[90%] shadow-gray-400 rounded">
                                        <h1 className="text-blue-500 font-bold py-3" style={{ fontSize: 35 }}>{value}</h1>
                                        <p className="text-black py-1 font-medium">{title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}