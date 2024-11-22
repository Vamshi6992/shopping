import React from "react";
import "./Footer.scss";
import payment from "../payment.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Catergories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Store</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            One of the best ways to use your About Us page is to illustrate your
            brand’s value proposition. As a brand that sells loungewear, Lunya
            puts craftsmanship at the forefront of what makes it different.
            .
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            As your users scroll to the end, consider how valuable the “real
            estate” at the bottom of your About Us page is. 
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">LamaStore</span>
          <span className="copyright">
            {" "}
            CopyRight 2024.All rights are reserved
          </span>
        </div>
        <div className="right">
            <img src={payment} alt="payments"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
