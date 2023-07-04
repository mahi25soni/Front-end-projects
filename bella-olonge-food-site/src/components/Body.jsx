import React from "react";
import login from "../assets/login.png";
import food from "../assets/food.png";
import payment from "../assets/payment.png";

export default function Body() {
  return (
    <>
      <div className="bodyClass">
        <div className="insideBody">
          <div>
            <img src={login} alt="" />
          </div>
          <div className="contentBody">
            <h2>Create an account</h2> <br />
            <h1>
              Create/login to an existing <br />
              account to get started
            </h1>{" "}
            <br />
            <h3>
              An account is created with your email and a desired password
            </h3>
          </div>
        </div>

        <div className="insideBody">
          <div className="contentBody">
            <h2>Explore variety</h2> <br />
            <h1>
              Shop for your favorites <br />
              meal as they are hot.
            </h1>{" "}
            <br />
            <h3>
              Shop for your favorite meals or drinks and enjoy while doing it.
            </h3>
          </div>
          <div>
            <img src={food} alt="" />
          </div>
        </div>

        <div className="insideBody">
          <div>
            <img src={payment} alt="" />
          </div>
          <div className="contentBody">
            <h2>Checkout</h2> <br />
            <h1>
              When you done check out <br />
              and get it delivered.
            </h1>{" "}
            <br />
            <h3>When you done check out and get it delivered with ease.</h3>
          </div>
        </div>
      </div>
    </>
  );
}
