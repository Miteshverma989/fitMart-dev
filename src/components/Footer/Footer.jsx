import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="footer-container p-2">
        <p className="pt-1 pb-2 small-text">
          Made with <span className="code-symbol">&lt;/&gt;</span> By Mitesh Verma
        </p>
        <ul>
          <li className="footer-link">
            <a
              href="https://github.com/Miteshverma989"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li className="footer-link">
            <a
              href="https://x.com/CsMitesh70646?t=aPaZiliMUMi3s-tqWvHQvw&s=09"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </li>
          <li className="footer-link">
            <a
              href="https://www.linkedin.com/in/mitesh-verma-057118178/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </li>
        </ul>
        <div>&copy; 2025 | fitMart | All Rights Reserved</div>
      </footer>
    </>
  );
};
