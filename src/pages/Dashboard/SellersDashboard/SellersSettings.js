import React from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import SellersSidebar from "./SellersComponent/SellersSideBar";
import Avatar from "@mui/material/Avatar";
import passport from "../../../assets/img/passport.jpg";

const SellersSettings = () => {
  return (
    <>
      <div>
        <div className="grid-container">
          <header className="header">
            <div className="header__message">
              <h2>My Account</h2>
            </div>
            <div className="header__search">
              <form>
                <div className="custom__search">
                  <Iconly
                    name="Search"
                    set="light"
                    primaryColor="#5C5C5C"
                    size="medium"
                  />
                  <input
                    type="text"
                    className="form-control custom-style"
                    id=""
                    placeholder="Search for orders, inquiries and more"
                  />
                </div>
              </form>

              <div className="notify-wrap position-relative">
                <Iconly
                  name="Notification"
                  set="bulk"
                  primaryColor="#282828"
                  size="medium"
                />
                <span className="seller icon-notification position-absolute"></span>
              </div>
            </div>
          </header>

          <SellersSidebar />

          <main className="main">
            <div className="main-overview">
              <div className="overview-card">
                <div className="seller-profile-card">
                  <div className="seller-profile-pic">
                    <Avatar
                      alt="Remy Sharp"
                      src={passport}
                      sx={{ width: 100, height: 100 }}
                    />
                  </div>
                  <div className="seller-setting-profile">
                    <h4>Profile</h4>
                    <p>Update your profile picture and personal details</p>
                    <Link to="#">Update your profile</Link>
                  </div>
                </div>

                <div className="seller-setting-form">
                  <form>
                    <div className="seller-setting-formgroup">
                      <div className="form-group-right">
                        <div className="form-group">
                          <label>Full Name</label>
                          <input
                            className="form-control"
                            type="text"
                            id="fullname"
                            placeholder="Erhuan Abhe"
                          />
                        </div>
                        <div className="form-group">
                          <label>Business Name</label>
                          <input
                            className="form-control"
                            type="text"
                            id="businessname"
                            placeholder="Fushion & co"
                          />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            className="form-control"
                            type="password"
                            id="text"
                            placeholder="********"
                          />
                        </div>
                        <div className="seller-seting-submit">
                          <button type="submit" className="btn btn-primary">
                            Change Password
                          </button>
                          <button type="submit" className="savechabnges-btn">
                            Save Changes
                          </button>
                        </div>
                      </div>
                      <div className="form-group-left">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            className="form-control"
                            type="text"
                            id="country"
                            placeholder="Nigeria"
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            className="form-control"
                            type="number"
                            id="phonenumber"
                            placeholder="+234-567-890-123"
                          />
                        </div>
                        <div className="form-group">
                          <label>Subscription Info</label>
                          <textarea
                            className="form-control"
                            type="text"
                            id="subscription"
                          />
                        </div>
                        <div className="seller-seting-joindate">
                          <p>Joined Since</p>
                          <p>March 15th 2019</p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SellersSettings;
