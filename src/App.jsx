import { Route, Routes } from "react-router-dom";
import MainLayout from "./router/MainLayout";

import Overview from "./pages/overview/Overview";
import Tour from "./pages/tour/Tour";
import Booking from "./pages/bookings/Booking";
import SignIn from "./pages/auth/SignIn";
import Test from "./pages/Test";
import SignUp from "./pages/auth/SignUp";
import RequireAuth from "./router/RequireAuth";
import DashboardLayout from "./router/DashboardLayout";
import AccountSettings from "./pages/dashboard/AccountSettings";
import Success from "./pages/payment/Success";
import Cancel from "./pages/payment/Cancel";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/tour/:tourId" element={<Tour />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/test" element={<Test />} />

          {/* Dashboard */}
          <Route element={<DashboardLayout />}>
            <Route path="/me" element={<AccountSettings />} />
          </Route>

          {/* Payments */}
          <Route path="/payment/success" element={<Success />}></Route>
          <Route path="/payment/cancel" element={<Cancel />}></Route>

        </Route>
      </Route>
    </Routes>
  );
};

export default App;
