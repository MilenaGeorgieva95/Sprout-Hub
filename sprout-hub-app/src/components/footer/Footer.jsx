import { Link } from "react-router";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    // <!-- Footer -->
    <footer
      className={
        "text-center text-lg-start bg-body-tertiary text-muted " +
        styles.footerContainer
      }
    >
      {/* <!-- Section: Links  --> */}
      <section className="">
        <div className="container text-center text-md-start mt-2">
          {/* <!-- Grid row --> */}
          <div className="row mt-3">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <p> ©2025 Milena Georgieva. All rights reserved.</p>
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-carrot me-3"></i>Sprout Hub
              </h6>
              <p>
                Gardening is a journey of growth and connection with nature.
                Each seed you plant nurtures both your garden and your spirit.
                Let us help turn your green dreams into vibrant realities.
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">Popular Posts</h6>
              <p>
                <Link
                  to="/posts/34a1cab1-81f1-47e5-aec3-ab6c9810efe5/details"
                  className="text-reset"
                >
                  Growing Tomatoes for Beginners
                </Link>
              </p>
              <p>
                <Link
                  to="posts/1240549d-f0e0-497e-ab99-eb8f703713d7/details"
                  className="text-reset"
                >
                  How to Start a Raised Bed Garden
                </Link>
              </p>
              <p>
                <Link
                  to="posts/143e5265-333e-4150-80e4-16b61de31aa0/details"
                  className="text-reset"
                >
                  Easy Care for Indoor Plants
                </Link>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/identify" className="text-reset">
                  Plant Identification
                </Link>
              </p>
              <p>
                <Link to="/about" className="text-reset">
                  More about us
                </Link>
              </p>
              <p>
                <Link to="/posts" className="text-reset">
                  Browse Posts
                </Link>
              </p>

              <p>
                <Link to="/categories" className="text-reset">
                  Browse All Categories
                </Link>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Sofia, Bulgaria, PO1000
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                sprout-hub@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +359 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 359 234 567 89
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-4"
        style={{
          backgroundColor: "#FFF",
          color: "rgba(0, 0, 0, 0.3)",
        }}
      >
        Footer Template © 2021 Copyright:
        <Link className="text-reset fw-bold" to="https://mdbootstrap.com/">
          MDBootstrap.com
        </Link>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    // <!-- Footer -->
  );
}
