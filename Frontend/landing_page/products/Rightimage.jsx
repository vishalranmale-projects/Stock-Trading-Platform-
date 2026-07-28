export default function Rightimage({ heading, paragraph, link1, link2 }) {
  return (
    <div className="container" style={{ display: "inline" }}>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      <div className="row">
        {link1 ? (
          <a href="#" className="mr-5 col-4">
            Try demo <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        ) : null}
        <div className="col-2"></div>

        {link2 ? (
          <a href="#" className="col-4">
            Try demo <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        ) : null}
      </div>
      <div className="row mt-4">
        <div className="col-3">
          <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en-US&pli=1">
            <img
              src="/public/Media/googlePlayBadge.svg"
              style={{ height: "2rem" }}
            ></img>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          <a href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802">
            {" "}
            <img
              src="/public/Media/appstoreBadge.svg"
              style={{ height: "2rem" }}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
