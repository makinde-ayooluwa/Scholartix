import { useState } from "react"

export default function Register({ setAuth }) {
    const [currentTab, setCurrentTab] = useState("school-details");
    const [userData, setUserData] = useState({});
    const [schoolData, setSchoolData] = useState({});
    function NextButton(){
        return <>
        <button className="bg-green-600">Next</button>
        </>
    }
    const tabs = [
        {
            title: "Create Account",
            id: "create-account"
        },
        {
            title: "School Details",
            id: "school-details"
        },
        {
            title: "School Setup",
            id: "school-setup"
        },
        {
            title: "Finish",
            id: "finish"
        },
    ]
    return <>
        <div className="p-5">
            <h1 className="text-blue-500 font-medium my-3" style={{ fontSize: 30 }}>
                Register your school
            </h1>
            <div className="w-full flex border-b border-gray-200">
                {tabs.map(({ title, id }) => (
                    <button
                        key={id}
                        className={
                            `flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 relative
                            ${currentTab === id
                                ? "text-blue-600"
                                : "text-gray-500"
                            } 
                        `}
                    >
                        {title}

                        {currentTab === id && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full" />
                        )}
                    </button>
                ))}
            </div>

            <div className="grid gap-3 w-full h-100 overflow-y-scroll scrollbar-none">
                {currentTab == "create-account" &&
                    <>
                        <div className="grid w-full justify-start">
                            <p>Fullname</p>
                            <input
                                value={userData?.fullname}
                                onInput={
                                    (e) => setUserData({ ...userData, fullname: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="text" name="" id="" />
                        </div>
                        <div className="grid w-full justify-start">
                            <p>Email</p>
                            <input
                                value={userData?.email}
                                onInput={
                                    (e) => setUserData({ ...userData, email: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="email" name="" id="" />
                        </div>
                        <div className="grid w-full justify-start">
                            <p>Phone number</p>
                            <input
                                value={userData?.phone}
                                onInput={
                                    (e) => setUserData({ ...userData, phone: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="tel" name="" id="" />
                        </div>
                        <div className="grid w-full justify-start">
                            <p>Role</p>
                            <input
                                value={userData?.role}
                                onInput={
                                    (e) => setUserData({ ...userData, role: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="text" name="" id="" />
                        </div>
                        <div className="grid w-full justify-start">
                            <p>Password</p>
                            <input
                                value={userData?.password}
                                onInput={
                                    (e) => setUserData({ ...userData, password: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="password" name="" id="" />
                        </div>
                        <NextButton />
                    </>
                }
                {currentTab == "school-details" &&
                    <>
                        <div className="grid w-full justify-start">
                            <p>School Name</p>
                            <input
                                value={schoolData?.name}
                                onInput={
                                    (e) => setSchoolData({ ...schoolData, name: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="text" name="" id="" />
                        </div>
                        <div className="grid w-full justify-start">
                            <p>School Type</p>
                            <input
                                value={schoolData?.type}
                                onInput={
                                    (e) => setSchoolData({ ...schoolData, type: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="text" name="" id="" />
                        </div>
                        <div className="grid w-full justify-start">
                            <p>School Email</p>
                            <input
                                value={schoolData?.email}
                                onInput={
                                    (e) => setSchoolData({ ...schoolData, email: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="email" name="" id="" />
                        </div>
                        <div className="grid w-full justify-start">
                            <p>School Phone Number</p>
                            <input
                                value={schoolData?.phone}
                                onInput={
                                    (e) => setSchoolData({ ...schoolData, phone: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="tel" name="" id="" />
                        </div>
                        <div className="grid w-full justify-start">
                            <p>School Country</p>
                            <input
                                value={schoolData?.country}
                                onInput={
                                    (e) => setSchoolData({ ...schoolData, country: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="text" name="" id="" />
                        </div>
                        <div className="grid w-full justify-start">
                            <p>School State/Province</p>
                            <input
                                value={schoolData?.state}
                                onInput={
                                    (e) => setSchoolData({ ...schoolData, state: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="text" name="" id="" />
                        </div>
                        <div className="grid w-full justify-start">
                            <p>School City</p>
                            <input
                                value={schoolData?.city}
                                onInput={
                                    (e) => setSchoolData({ ...schoolData, city: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="text" name="" id="" />
                        </div>
                        <div className="grid w-full justify-start">
                            <p>School Address</p>
                            <input
                                value={schoolData?.address}
                                onInput={
                                    (e) => setSchoolData({ ...schoolData, address: e.target.value })
                                }
                                className="border w-100 p-2 rounded-[7px] outline-blue-500" type="text" name="" id="" />
                        </div>
                    </>
                }
            </div>

        </div>
    </>
}