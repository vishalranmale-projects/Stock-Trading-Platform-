export default function Team() {
  return (
    <>
      <div className="container" style={{ marginTop: "5rem" }}>
        <div className="row p-4">
          <h2 style={{ textAlign: "center" }}>People</h2>
        </div>
        <div className="row mt-5 p-4">
          <div className="col-1"></div>
          <div className="col-4">
            <div className="row">
              <img
                style={{
                  height: "19rem",
                  width: "20rem",
                  borderRadius: "200px",
                }}
                src="/public/Media/nithinKamath.jpg"
              ></img>
              <h6 className="text-muted text-center mt-3 mr-3">
                Nithin Kamath
              </h6>

              <span className="text-muted text-center">Founder,CEO</span>
            </div>
            <div className="container p-4">
              <div className="row"></div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            <h6 className="text-muted">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </h6>
            <br></br>
            <h6 className="text-muted">
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </h6>
            <br></br>
            <h6 className="text-muted">Playing basketball is his zen.</h6>
            <br></br>
            <h6 className="text-muted">
              Connect on Homepage / TradingQnA / Twitter
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
