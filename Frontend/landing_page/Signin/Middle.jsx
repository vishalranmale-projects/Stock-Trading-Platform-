export default function Middle() {
  return (
    <>
      <div className="container" style={{ marginBottom: "10rem" }}>
        <div className="row">
          <div className="col-6 p-4">
            <img
              src="/public/Media/signup.png"
              alt="Loading"
              style={{ height: "29rem", width: "32rem" }}
            ></img>
          </div>
          <div
            className="col-6 p-4 ms-5"
            style={{ height: "22rem", width: "30rem" }}
          >
            <div className="row">
              <h3>Signup Now</h3>
            </div>
            <span className="text-muted">
              Or track your existing application
            </span>
            <div className="row">
              {" "}
              <form action={"http://localhost:3000/signin"} method="post">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Username :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Vishal Ranmale"
                    name="username"
                    required
                  ></input>
                </div>
                
                <div class="mb-3">
                  <label for="exampleFormControlInput3" class="form-label">
                    Password :
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput3"
                    name="password"
                    required
                  ></input>
                </div>
                <div className="mb-3">
                  <p className="" style={{ fontSize: "0.8rem" }}>
                    By proceeding, you agree to the Zerodha{" "}
                    <a
                      href="#"
                      style={{
                        color: "rgb(14, 111, 201)",
                        textDecoration: "none",
                      }}
                    >
                      terms&nbsp;
                    </a>
                    &
                    <a
                      href="#"
                      style={{
                        color: "rgb(14, 111, 201)",
                        textDecoration: "none",
                      }}
                    >
                      {" "}
                      privacy policy
                    </a>
                  </p>
                </div>

                <hr></hr>
                <div className="mb-3">
                  <p style={{ fontSize: "0.8rem" }}>
                    Looking to open NRI account ?{" "}
                    <a
                      href="#"
                      style={{
                        color: "rgb(14, 111, 201)",
                        textDecoration: "none",
                      }}
                    >
                      Click here
                    </a>
                  </p>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-3">
                    Signin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h3
            className="text-center mb-3"
            style={{ color: "rgb(14, 111, 201)" }}
          >
            Already have a demat account?
          </h3>
        </div>
        <div className="row">
          <h5
            className="text-muted text-center "
            style={{ marginBottom: "8rem" }}
          >
            Move your holdings to Zerodha and we'll cover your transfer costs,
            up to ₹500,{" "}
            <a
              href="#"
              style={{ color: "rgb(14, 111, 201)", textDecoration: "none" }}
            >
              learn more.
            </a>
          </h5>
        </div>
      </div>
    </>
  );
}
