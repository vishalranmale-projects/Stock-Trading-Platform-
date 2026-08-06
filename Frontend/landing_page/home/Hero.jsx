import React from "react";
import "../../public/Stylesheets/Hero.css";

function Hero() {
  return (
    <div className="container p-4 ">
      <div className="row mb-5 text-center">
        <img
          src="/public/media/homeHero.png"
          alt="Hero Image"
          style={{ marginTop: "60px" }}
        ></img>

        <h1 className="H">Invest in everything</h1>
        <p>
          Online platform to invest in stocks,derivatives,mutual funds,and
          more{" "}
        </p>
        <a href="http://localhost:5173/signup">
          <button
            type="button"
            style={{ width: "200px" }}
            className="btn btn-primary btn-lg mt-4 mx-auto d-block"
          >
            Signup Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
