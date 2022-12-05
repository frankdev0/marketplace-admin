import React from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import "../../Dashboard/Dashboard.css";
import "./Sidebar.css";

const SellersSidebar = () => {
  return (
    <>
      <aside id="seller" className="sidenav">
        <div className="sidenav__close-icon">
          <i className="fas fa-times sidenav__brand-close"></i>
        </div>

        <div className="user-area">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 user-area-art">E</div>
            <div className="flex-grow-1 ms-2">
              <p>Erhun Abbe</p>
            </div>
          </div>
        </div>

        <h2 className="sidenav_title">Dashboard</h2>

        {/* <div className="switch-wrap">
          <div className="switch d-flex justify-content-between">
            <div className="switch-lhs">
              <Link to="/buyer/dashboard">Buy</Link>
            </div>
            <div className="switch-rhs">
              <Link to="/seller/dashboard">Sell</Link>
            </div>
          </div>
        </div> */}

        <ul className="sidenav__list">
          <Link className="sidenav-link" to="/dashboard">
            <li className="sidenav__list-item">
              <Iconly className="list_icon" name="Home" size="small" />
              Overview
            </li>
          </Link>
          <Link className="sidenav-link" to="/buyers">
            <li className="sidenav__list-item">
              <Iconly className="list_icon" name="People" size="small" />
              Buyers
            </li>
          </Link>
          <Link className="sidenav-link" to="/sellers">
            <li className="sidenav__list-item">
              <Iconly className="list_icon" name="People" size="small" />
              Sellers
            </li>
          </Link>

          <Link className="sidenav-link" to="/transactions">
            <li className="sidenav__list-item">
              <Iconly className="list_icon" name="Paper" size="small" />
              Transactions
            </li>
          </Link>
          <Link className="sidenav-link" to="/categories">
            <li className="sidenav__list-item">
              <Iconly className="list_icon" name="Filter" size="small" />
              Category
            </li>
          </Link>

          <Link className="sidenav-link" to="/product-listing">
            <li className="sidenav__list-item">
              <Iconly className="list_icon" name="Category" size="small" />
              Product Listings
            </li>
          </Link>
          <Link className="sidenav-link" to="/sellers-subscription">
            <li className="sidenav__list-item">
              <Iconly className="list_icon" name="Star" size="small" />
              Subscriptions
            </li>
          </Link>

          {/* <Link className="sidenav-link" to="/seller/message-center">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon position-relative"
                name="Message"
                set="light"
                size="small"
              />
              Message Center
              <span className="icon-notification position-absolute"></span>
            </li>
          </Link> */}

          <Link className="sidenav-link" to="/rfqs">
            <li className="sidenav__list-item">
              <Iconly className="list_icon" name="Folder" size="small" />
              RFQs
            </li>
          </Link>
          <Link className="sidenav-link" to="/buyers-disputes">
            <li className="sidenav__list-item">
              <Iconly className="list_icon" name="Chat" size="small" />
              Disputes
            </li>
          </Link>

          <Link className="sidenav-link" to="/settings">
            <li className="sidenav__list-item">
              <Iconly className="list_icon" name="Setting" size="small" />
              Settings
            </li>
          </Link>

          <Link className="sidenav-link" to="/">
            <li className="sidenav__list-item">
              <Iconly
                className="nav-icon"
                name="Logout"
                size="small"
                style={{ marginRight: "15px" }}
              />
              Logout
            </li>
          </Link>
        </ul>

        <ul className="sidenav__list mt-auto">
          <Link className="sidenav-link" to="/">
            <li className="sidenav__list-item">
              <Iconly className="list_icon" name="ArrowLeft" size="small" />
              Marketplace
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default SellersSidebar;
