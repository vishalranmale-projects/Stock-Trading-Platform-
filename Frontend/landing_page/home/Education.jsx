function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <img src="/public/Media/education.svg"></img>
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <div className="row mb-5">
            <h3>Free and open market education</h3>
          </div>
          <div className="row">
            <p style={{ marginBottom: "2rem" }}>
              Versity,the largest online stock market education bcovering
              everything from the basics to advanced tr
            </p>
          </div>
          <div className="row mb-5">
            <a href="#" style={{ textDecoration: "none" }}>
              Versity<i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="row">
            <p>
              Traiding Q&A,the most active traiding and investment community in
              india for all your market related queries
            </p>
          </div>
          <div className="row">
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQ&A
              <i
                class="fa-solid fa-arrow-right-long"
                style={{ textAlign: "center" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
