export default function Universe() {
  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          <h2>The Zerodha Universe</h2>
        </div>
        <div className="row">
          <p>
            Extend your trading and investment experience even further with our
            partner platform
          </p>
        </div>
      </div>
      <div className="container" style={{ marginLeft: "3rem" }}>
        <div className="row mt-4 ">
          <div className="col-4 text-center">
            <img
              className="mb-1"
              src="/public/Media/smallcaseLogo.png"
              style={{ height: "2rem", width: "10rem" }}
            ></img>
            <p className="fs-50 text-muted" style={{ fontSize: "0.8rem" }}>
              Thematic investment platform
            </p>
          </div>

          <div className="col-4 text-center">
            <img
              className="mb-1"
              src="/public/Media/streakLogo.png"
              style={{ height: "2rem", width: "10rem" }}
            ></img>
            <p className="fs-50 text-muted" style={{ fontSize: "0.8rem" }}>
              Algo & strategy platform
            </p>
          </div>

          <div className="col-4 text-center">
            <img
              className="mb-1"
              src="/public/Media/sensibullLogo.svg"
              style={{ height: "2rem", width: "10rem" }}
            ></img>
            <p className="fs-50 text-muted" style={{ fontSize: "0.8rem" }}>
              Options trading platform
            </p>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-4 text-center">
            <img
              className="mb-1"
              src="/public/Media/zerodhaFundhouse.png"
              style={{ height: "2rem", width: "10rem" }}
            ></img>
            <p className="fs-50 text-muted" style={{ fontSize: "0.8rem" }}>
              Asset management{" "}
            </p>
          </div>

          <div className="col-4 text-center">
            <img
              className="mb-1"
              src="/public/Media/goldenpiLogo.png"
              style={{ height: "2rem", width: "10rem" }}
            ></img>
            <p className="fs-50 text-muted" style={{ fontSize: "0.8rem" }}>
              Bonds trading platform{" "}
            </p>
          </div>

          <div className="col-4 text-center">
            <img
              className="mb-1"
              src="/public/Media/dittoLogo.png"
              style={{ height: "2rem", width: "10rem" }}
            ></img>
            <p className="fs-50 text-muted" style={{ fontSize: "0.8rem" }}>
              Insurance
            </p>
          </div>
        </div>
        <div className="row mt-5 mb-5 text-center">
          <div className="col-4"></div>
          <div className="col-4">
            {" "}
            <button
              type="button"
              style={{ width: "200px" }}
              className="btn btn-primary btn-lg"
            >
              Signup up now
            </button>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}
