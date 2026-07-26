import "../../public/Stylesheets/Stat.css";
function Stats() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col textBlock">
          <div className="row">
            <h3 className="mb-5">Trust With Confidence</h3>
          </div>
          <div className="row">
            <h4>Customer-first always</h4>
            <p className="text-muted">
              That's wht 1.3+ crore customers trust Zerodha with 3.5+ lakh
              croresworth of equity investments
            </p>
          </div>
          <div className="row">
            <h4>No Spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks,span,"gamification",or annoying push notifications.
              High quality apps that you use at your pace,the way you like.
            </p>
          </div>
          <div className="row">
            <h4>The Zerotha universe</h4>
            <p className="text-muted">
              Not just an app,but a whole ecosystem.Our investments in
              30+fintech startups offer you tailored services specific to your
              needs
            </p>
          </div>
          <div className="row">
            <h4>Do better with money</h4>
            <p className="text-muted">
              with initiatives like Nudge and kill Switch, we don't just
              facilitate transactions,but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col">
          <img className="Statimg" src="/public/Media/ecosystem.png"></img>
          <div className="row Anchor">
            <a href="#" style={{ textDecoration: "none" }}>
              Explore our products
              <i class="fa-solid fa-arrow-right-long"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
