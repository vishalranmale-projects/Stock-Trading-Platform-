export default function Brokerage() {
  return (
    <>
      <div className="container mt-5" style={{ marginLeft: "5rem" }}>
        <div className="row">
          <div className="col-8 p-4">
            <a href="#" style={{ textDecoration: "none" }}>
              <h4
                className=" mb-4"
                style={{ color: "skyblue", marginLeft: "7rem" }}
              >
                Brokerage Calculator
              </h4>
            </a>
            <ul>
              <div className="row mb-3">
                <li className="text-muted" style={{ fontSize: "12px" }}>
                  Call & Trade and RMS auto-squareoff:Additional charges of $50
                  + GST per order
                </li>
              </div>
              <div className="row  mb-3">
                <li className="text-muted fs-15" style={{ fontSize: "12px" }}>
                  Digital contact notes will be sent via e-mail
                </li>
              </div>
              <div className="row  mb-3">
                <li className="text-muted fs-15" style={{ fontSize: "12px" }}>
                  Physical copies of contract notes,if required,shall be charged
                  $20 per contact note. Courier charges apply
                </li>
              </div>
              <div className="row  mb-3">
                <li className="text-muted fs-15" style={{ fontSize: "12px" }}>
                  For NRI account (non-PIS),0.5% or $100 per executed order for
                  equity (whichever is lower)
                </li>
              </div>
              <div className="row  mb-3">
                <li className="text-muted fs-15" style={{ fontSize: "12px" }}>
                  for NRI account (PIS) ,0.5% or $200 per executed order for
                  equity (whichever is lower)
                </li>
              </div>
              <div className="row  mb-3">
                <li className="text-muted fs-15" style={{ fontSize: "12px" }}>
                  if the account is in debit balance ,any order placed will be
                  charged $40 per executed order instead of $20 per executed
                  order.
                </li>
              </div>
            </ul>
          </div>
          <div className="col-4 p-4">
            <a href="#" style={{ textDecoration: "none" }}>
              <h4 style={{ color: "skyblue" }}>List of charges</h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
