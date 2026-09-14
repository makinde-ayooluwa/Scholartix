import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
import AuthLayout from "../layouts/authLayout";

export default function AppRouter() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={
                        <>
                            <Homepage />
                        </>
                    }
                />
                <Route path="/auth" element={<AuthLayout />} />
            </Routes>
        </BrowserRouter>
    </>
}