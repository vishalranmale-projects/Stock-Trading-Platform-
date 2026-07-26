import React from "react";
import "../public/Stylesheets/footer.css";
function Footer() {
  return (
    <footer className="foot">
      <div className="container mt-3">
        <hr></hr>
        <div className="row">
          <div className="col" style={{ paddingRight: "3rem" }}>
            <div className="row">
              <img
                style={{
                  width: "180px",
                  height: "20px",
                  marginBottom: "1rem",
                  paddingLeft: "2px",
                }}
                src="/public/Media/logo.svg"
                alt=""
              />
            </div>
            <div className="row">
              &copy; 2010-2024, Not Zerodha Broking Ltd. All rights reserved
            </div>
            <div className="socials" style={{ paddingRight: "1rem" }}>
              <a href="#" style={{ color: "black" }}>
                <i class="fa-brands fa-twitter"></i>
              </a>

              <a href="#" style={{ color: "black" }}>
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="#" style={{ color: "black" }}>
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" style={{ color: "black" }}>
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" style={{ color: "black" }}>
                <i class="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>

          <div className="col">
            <a href="#" className="row footitems">
              Company
            </a>
            <a className="row footitems">About</a>
            <a className="row footitems">Products</a>
            <a className="row footitems">Pricing</a>
            <a className="row footitems">Referral programe</a>
            <a className="row footitems">Careers</a>
            <a className="row footitems">Zerodha.tech</a>
            <a className="row footitems">Press & media</a>
            <a className="row footitems">Zerodha cares (CSR)</a>
          </div>
          <div className="col">
            <a href="#" className="row footitems">
              Support
            </a>

            <a className="row footitems">Contact</a>
            <a className="row footitems">Support portal</a>
            <a className="row footitems">Z-Connect blog</a>
            <a className="row footitems">List of Charges</a>
            <a className="row footitems">Downloads & resources</a>
          </div>
          <div className="col">
            <a className="row footitems">Account</a>
            <a className="row footitems">Open an account</a>
            <a className="row footitems">Fund transfer</a>
            <a className="row footitems">60 day challange</a>
          </div>
        </div>
        <div className="row mt-3">
          <p className="footer-text">
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p className="footer-text">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="footer-text">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className="footer-text">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-8 footlinks">
          <a
            href="#"
            style={{
              fontSize: "0.8rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            NSE
          </a>
          <a
            style={{
              fontSize: "0.8rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            BSE
          </a>
          <a
            style={{
              fontSize: "0.8rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            MCX
          </a>
          <a
            style={{
              fontSize: "0.8rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            Terms & condition
          </a>
          <a
            style={{
              fontSize: "0.8rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            Policies & procedure
          </a>
          <a
            style={{
              fontSize: "0.8rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            Privacy policy
          </a>
          <a
            style={{
              fontSize: "0.8rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            Disclosure
          </a>
        </div>
        <div className="col-1"></div>
      </div>
      <br></br>
    </footer>
  );
}

export default Footer;
