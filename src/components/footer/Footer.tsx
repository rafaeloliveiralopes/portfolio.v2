"use client";

import React, { useEffect } from "react";

export default function Footer() {
  const handleScrollToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (scrollToTopButton) {
      // Add event listener
      scrollToTopButton.addEventListener("click", handleScrollToTopClick);

      // Return a cleanup function to remove the event listener
      return () => {
        scrollToTopButton.removeEventListener("click", handleScrollToTopClick);
      };
    }
  }, []);

  return (
    <footer className="text-light py-5 text-align-center footer-main-container">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-3 mb-md-0 text-md-start">
            <p className="mb-2 fs-5">+55 (62) 99213-6842</p>
            <p className="fs-5">rafaelopes.dev@gmail.com</p>
          </div>
          <div className="col-12 col-md-8 text-md-end text-sm-start">
            <p className="mb-2 fs-5">
              <a href="#" className="text-decoration-none text-light">
                Termos de Serviços
              </a>
            </p>
            <p className="fs-5">
              <a href="#" className="text-decoration-none text-light">
                Política de Privacidade
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center my-2 mt-5">
            <p className="copyright mb-0">
              &#169;2024 Desenvolvido por rafaellopes.dev
            </p>
          </div>
        </div>
        <div className="row">
          <div className="footer-socials col-12 text-center">
            <p>
              <a
                href="https://github.com/rafaeloliveiralopes"
                target="_blank"
                className="text-decoration-none me-2"
              >
                GitHub
              </a>
              .
              <a
                href="https://www.linkedin.com/in/rafael-lopes-desenvolvedor-fullstack/"
                target="_blank"
                className="text-decoration-none mx-2"
              >
                LinkedIn
              </a>
              .
              <a
                href="https://www.instagram.com/rafaellopes.dev/"
                target="_blank"
                className="text-decoration-none ms-2"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <svg
              id="scrollToTop"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-up"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
