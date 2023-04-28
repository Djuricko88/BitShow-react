import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

  return (
    <footer>
      <div className="footer">
        <div className="foot_container">
          <p>
            &copy; {currentMonth} {currentYear} BIT By Marko Djurickovic
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
