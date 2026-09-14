import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";

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
            </Routes>
        </BrowserRouter>
    </>
}