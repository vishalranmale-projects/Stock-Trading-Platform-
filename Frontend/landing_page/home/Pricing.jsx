import "../../public/Stylesheets/Pricing.css";
function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <div className="row">
            <h2>Unbeatable pricing</h2>
          </div>
          <div className="row mt-4">
            <p>
              We pioneered the concept of discount broking and price
              transparency in india. Flat fees and no hidden charges
            </p>
          </div>
          <div className="row">
            <a href="#" style={{ textDecoration: "none" }} className="mt-2">
              See pricing&nbsp; <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6 mb-5">
          <div className="row">
            <div className="col innerBlocks">
              <h3>
                <i class="fa-solid fa-indian-rupee-sign rupeelogo"></i>0
              </h3>
              <p style={{ marginBottom: "0px" }}>free equity delivery and</p>{" "}
              <p style={{ paddingTop: "0px" }}>direct mutual funds</p>
            </div>
            <div className="col innerBlocks">
              <h3 style={{ marginBottom: "2rem" }}>
                <i class="fa-solid fa-indian-rupee-sign rupeelogo"></i>20
              </h3>
              <p>Intraday and F&Q</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
