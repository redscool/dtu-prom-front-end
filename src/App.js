// import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import store from "./redux/store";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import UpdateProfile from "./pages/UpdateProfile";
import Test from "./pages/Test";

export default function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgetpassword" element={<ForgetPassword />} />
        <Route exact path="/verifyemail/:token" element={<VerifyEmail />} />
        <Route exact path="/resetpassword/:token" element={<ResetPassword />} />
        <Route exact path="/updateprofile" element={<UpdateProfile />} />
        <Route exact path="/test" element={<Test />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
}
