import "../public/Stylesheets/OpenAccount.css";
function OpenAccount() {
  return (
    <>
      <div className="container OpenaccountContainer">
        <h1>Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, $0 investments,and flat $20 intraday and
          F&O trades.
        </p>

        <div className="row">
          <button
            type="button"
            style={{ width: "200px" }}
            className="btn btn-primary btn-lg  mx-auto d-block"
          >
            Signup Now
          </button>
        </div>
      </div>
    </>
  );
}

export default OpenAccount;
