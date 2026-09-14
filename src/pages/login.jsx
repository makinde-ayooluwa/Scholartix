import { useState } from "react"

export default function Login({ setAuth }) {
    const [data, setData] = useState({});
    return <>
        <div className="p-5">
            <h1 className="text-blue-500 font-medium my-3" style={{ fontSize: 30 }}>
                Login to your account
            </h1>
            <div className="grid gap-3 w-full">
                <div className="grid w-full justify-start">
                    <p>NaviSchool ID</p>
                    <input
                        value={data?.id}
                        onInput={
                            (e) => setData({ ...data, id: e.target.value })
                        }
                        className="border w-100 p-2 rounded-[7px] outline-blue-500" type="text" name="" id="" />
                </div>
                <div className="grid w-full justify-start">
                    <p>Password</p>
                    <input
                        value={data?.password}
                        onInput={
                            (e) => setData({ ...data, password: e.target.value })
                        }
                        className="border w-100 p-2 rounded-[7px] outline-blue-500" type="password" name="" id="" />
                </div>
                <div className="flex justify-end">
                    <div className="font-medium cursor-pointer" style={{ fontSize: 12 }} onClick={() => setAuth("forgot-password")}>
                        Forgot password?
                    </div>
                </div>
                <button className="w-full bg-green-600 p-2 rounded-[7px] cursor-pointer text-white font-medium">Login</button>
                <p className="text-gray-600 text-center" style={{ fontSize: 12 }}>
                    Don't have a school registered?
                    <div onClick={() => setAuth("register")} className="cursor-pointer hover:underline text-blue-700">Register your school now</div>
                </p>
            </div>
        </div>

    </>
}