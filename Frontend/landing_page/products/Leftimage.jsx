import "../../public/Stylesheets/Leftimage.css";
export default function Leftimage({ imageLink }) {
  return (
    <div
      className="container ml-5"
      style={{
        display: "inline",
        height: "2rem",
        width: "2rem",
        marginLeft: "2rem",
      }}
    >
      <img
        className="outerCon"
        src={imageLink}
        style={{ height: "25rem", width: "25rem" }}
      ></img>
    </div>
  );
}
