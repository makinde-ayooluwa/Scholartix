import { useState } from "react"

export default function Register({ setAuth }) {
    const [currentTab, setCurrentTab] = useState("create-account")
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
                        onClick={() => setCurrentTab(id)}
                        className={
                            `flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 relative
                            ${currentTab === id
                                ? "text-blue-600"
                                : "text-gray-500 hover:text-gray-700"
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
            {currentTab}
        </div>
    </>
}