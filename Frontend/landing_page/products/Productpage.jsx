import Hero from "./Hero";
import Leftimage from "./Leftimage";
import Rightimage from "./Rightimage";
import Universe from "./Universe";

export default function Productpage() {
  return (
    <>
      <Hero />
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <Leftimage imageLink={"/public/Media/kite.png"} />
          </div>
          <div className="col-3"></div>
          <div className="col-4 mt-5">
            <Rightimage
              heading={"Kite"}
              paragraph={
                "Our ultra-fast flagship trading platform with streaming market data,advanced charts,an elgant UI,and more.Enjoy the kite experience seamlessly on your Android and iOS devices."
              }
              link1={"#"}
              link2={"#"}
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4 mt-5" style={{ marginLeft: "4rem" }}>
            <Rightimage
              heading={"Console"}
              paragraph={
                "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
              }
              link1={"#"}
            />
          </div>
          <div className="col-1" style={{ marginLeft: "80px" }}></div>
          <div className="col-4">
            <Leftimage imageLink={"/public/Media/console.png"} />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <Leftimage imageLink={"/public/Media/coin.png"} />
          </div>
          <div className="col-3"></div>
          <div className="col-4 mt-5">
            <Rightimage
              heading={"Coin"}
              paragraph={
                "Buy direct mutual funds online,commission-free,delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
              }
              link1={"#"}
              link2={"#"}
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4 mt-5" style={{ marginLeft: "4rem" }}>
            <Rightimage
              heading={"Kite Connect API"}
              paragraph={
                "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup,build your investment app and showcase it to our clientbase"
              }
              link1={"#"}
            />
          </div>
          <div className="col-1" style={{ marginLeft: "80px" }}></div>
          <div className="col-4">
            <Leftimage imageLink={"/public/Media/kiteconnect.png"} />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <Leftimage imageLink={"/public/Media/varsity.png"} />
          </div>
          <div className="col-3"></div>
          <div className="col-4 mt-5">
            <Rightimage
              heading={"Varsity mobile"}
              paragraph={
                "An easy to grasp,collections of stock market lessons with in-depth coverage and illustrations.Content is broken down into bite-size cards to help you learn on the go"
              }
              link1={"#"}
              link2={"#"}
            />
          </div>
        </div>
      </div>
      <Universe />
    </>
  );
}
