import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import Home from "./pages/Home/Home";
import Authentication from "./pages/Authentication/Authentication";
import BuyersRegistration from "./pages/Authentication/BuyersRegistration";
import SellersRegistration from "./pages/Authentication/SellersRegistration";
import PhoneVerification from "./pages/Authentication/PhoneVerification";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Login from "./pages/Authentication/Login";
import ResetPassword from "./pages/Authentication/ResetPassword";

// import BuyersDashboard from "./pages/Dashboard/BuyersDashboard/BuyersDashboard";
// import BuyersMessageCenter from "./pages/Dashboard/BuyersDashboard/BuyersMessageCenter";
// import BuyersOrders from "./pages/Dashboard/BuyersDashboard/BuyersOrders";
// import BuyersOrderInfo from "./pages/Dashboard/BuyersDashboard/BuyersOrderInfo";
// import BuyersQuote from "./pages/Dashboard/BuyersDashboard/BuyersQuote";
// import BuyersRfqs from "./pages/Dashboard/BuyersDashboard/BuyersRfqs";
// import BuyersSettings from "./pages/Dashboard/BuyersDashboard/BuyersSettings";

import SellersDashboard from "./pages/Dashboard/Dashboard";
import SellersOrder from "./pages/Dashboard/transaction/SellersOrder";
import EmailVerification from "./pages/Authentication/EmailVerification";
import SellersDispute from "./pages/Dashboard/disputes/SellersDispute";
import Categories from "./pages/Dashboard/categories/Categories";
import Buyers from "./pages/Dashboard/buyer/Buyers";
import Sellers from "./pages/Dashboard/sellers/Sellers";
import SellersSubscription from "./pages/Dashboard/subscription/sellerssubscription/SellersSubscription";
import Settings from "./pages/Dashboard/settings/Settings";
import SellersRfqs from "./pages/Dashboard/rfq/SellersRfqs";
import ProductListing from "./pages/Dashboard/ProductListing/ProductListing";
import BuyersDispute from "./pages/Dashboard/disputes/BuyersDsipute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/buyers-registration" element={<BuyersRegistration />} />
          <Route
            path="/sellers-registration"
            element={<SellersRegistration />}
          />

          <Route exact path="product-listing" element={<ProductListing />} />
          <Route path="/phone-verification" element={<PhoneVerification />} />
          <Route path="/verify-email/:email" element={<EmailVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:resetToken"
            element={<ResetPassword />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/login/:userId/:token" element={<Login />} />

          {/* <Route path="/buyer/dashboard" element={<BuyersDashboard />} />
          <Route
            path="/buyer/message-center"
            element={<BuyersMessageCenter />}
          />
          <Route path="/buyer/orders" element={<BuyersOrders />} />
          <Route path="/buyer/order-info" element={<BuyersOrderInfo />} />
          <Route path="/buyer/quotes" element={<BuyersQuote />} />
          <Route path="/buyer/rfqs" element={<BuyersRfqs />} />
          <Route path="/buyer/settings" element={<BuyersSettings />} /> */}

          <Route path="/" element={<SellersDashboard />} />

          <Route
            exact
            path="/sellers-subscription"
            element={<SellersSubscription />}
          />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/transactions" element={<SellersOrder />} />
          <Route path="/categories" element={<Categories />} />
          <Route exact path="/rfqs" element={<SellersRfqs />} />
          <Route exact path="settings" element={<Settings />} />
          <Route path="/sellers-disputes" element={<SellersDispute />} />
          <Route path="/Buyers-disputes" element={<BuyersDispute />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
