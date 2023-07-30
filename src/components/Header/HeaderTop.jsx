import React from "react";

const HeaderTop = () => {
  return (
    <header className="header-top-strip py-2">
      <div className="container ">
        <div className="row">
          <div className="col-6">
            <p className=" m-0 text-white ">
              Free Shipoing Over $100 & Free Returns
            </p>
          </div>
          <div className="col-6">
            <p className="m-0 text-end text-white">
              Hotline:{" "}
              <a className="text-white" href="tel:+91 8264954234">
                (888) 4344 6000-(888) 1338 8193
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
