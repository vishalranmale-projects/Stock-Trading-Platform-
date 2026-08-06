export default function Hero() {
  return (
    <>
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row text-center">
          <h2>Pricing</h2>
        </div>
        <div className="row text-center mt-2">
          <p className="text-muted">
            Free equity investment and flat $20 traday and F&O trades
          </p>
        </div>
        <br></br>

        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4 p-5">
            <div className="row">
              <img src="/public/Media/pricing0.svg" alt="alt" />
            </div>
            <div className="row">
              <h4 className="text-center">Free equity delivery</h4>
            </div>
            <div className="row">
              <p className="text-center text-muted">
                All equity delivery investment (NSE,BSE),<br></br>
                are absolutely free -$0 brokerage
              </p>
            </div>
          </div>

          <div className="col-4 p-5">
            <div className="row">
              <img src="/public/Media/intradayTrades.svg" />
            </div>
            <div className="row">
              <h4 className="text-center">Intraday and F&O trades</h4>
            </div>
            <div className="row">
              <p className="text-center text-muted">
                Flat Rs.20 or 0.03% (whichever is lower)<br></br> per executed
                order on intraday trades <br></br>across equity,currency,and
                commodity trades
              </p>
            </div>
          </div>

          <div className="col-4 p-5">
            <div className="row">
              <img src="/public/Media/intradayTrades.svg" alt="alt" />
            </div>
            <div className="row">
              <h4 className="text-center">Free direct ME</h4>
            </div>
            <div className="row">
              <p className="text-center text-muted">
                All equity delivery investment (NSE,BSE), are absolutely free
                -$0 brokerage
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
}
