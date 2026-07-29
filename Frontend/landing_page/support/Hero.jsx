export default function Hero() {
  return (
    <>
      <div
        className="outerContainer"
        style={{
          margin: "0px",
          padding: "0px",
          backgroundColor: "rgb(14, 111, 201)",
        }}
      >
        <div className="container mt-5" style={{ marginTop: "" }}>
          <div className="row">
            <div className="col-5 p-5 ms-5">
              <div className="row">
                <h5 className="mb-5" style={{ color: "white" }}>
                  Support Portal
                </h5>
              </div>
              <div className="row mb-2">
                <h5 style={{ color: "white" }}>
                  Search for an answer or browse help topics to create a ticket
                </h5>
              </div>
              <div className="row">
                <form className="mb-2">
                  <textarea
                    style={{
                      width: "26rem",
                      fontSize: "0.9rem",
                      textAlign: "center",
                      padding: "0.5rem",
                      borderRadius: "8px",
                    }}
                    name="Ticket"
                    id="Ticket"
                    placeholder="E.g how do i actively F&O,why is my order getting rejected."
                  ></textarea>
                </form>
              </div>
              <div className="row">
                <p className="fs-10" style={{ fontSize: "0.9rem" }}>
                  <a href="#" style={{ color: "white" }}>
                    Track account opening
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" style={{ color: "white" }}>
                    Track segment activation
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" style={{ color: "white" }}>
                    Intraday
                  </a>
                  <br></br>
                  <a href="#" style={{ color: "white" }}>
                    margins
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" style={{ color: "white" }}>
                    Kite user manual
                  </a>
                </p>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5 p-5">
              <div className="row mb-5">
                <a
                  className="text-center"
                  href="#"
                  style={{ color: "white", marginLeft: "5.3rem" }}
                >
                  Track Tickets
                </a>
              </div>
              <div className="row">
                <h5 style={{ color: "white" }}>Featured</h5>
              </div>
              <div className="row">
                <p style={{ color: "white" }}>
                  1.
                  <a style={{ color: "White" }} href="#">
                    Current Takeovers and Delisting-January 2024
                  </a>
                </p>
              </div>
              <div className="row">
                <p style={{ color: "white" }}>
                  2.
                  <a style={{ color: "White" }} href="#">
                    Latest Intraday leverages-MIS & CO
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
