import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage";
import SignupPage from "../pages/SignupPage";
import SigninPage from "../pages/SigninPage";

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signIn" element={<SigninPage />} />
        </Route>
    )
) 

export default AppRouter