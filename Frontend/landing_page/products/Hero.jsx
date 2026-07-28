import "../../public/Stylesheets/productHero.css";
export default function Products() {
  return (
    <>
      <div className="Hero container">
        <h2>Technology</h2>
        <h5 className="text-muted">
          Sleek , modern and intuitive trading platforms
        </h5>
        <p style={{ fontSize: "1rem" }}>
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings<i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
      <div className="container">
        {" "}
        <hr></hr>
      </div>
    </>
  );
}
