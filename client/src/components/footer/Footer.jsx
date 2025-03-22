import Header from "../header/Header";
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
        <div className="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div className="row mt-3">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
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
                <a href="/posts/1/details" className="text-reset">
                  Growing Tomatoes for Beginners
                </a>
              </p>
              <p>
                <a href="posts/2/details" className="text-reset">
                  How to Start a Raised Bed Garden
                </a>
              </p>
              <p>
                <a href="posts/3/details" className="text-reset">
                  Easy Care for Indoor Plants
                </a>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/identify" className="text-reset">
                  Plant Identification
                </a>
              </p>
              <p>
                <a href="/about" className="text-reset">
                  More about us
                </a>
              </p>
              <p>
                <a href="posts" className="text-reset">
                  Browse Posts
                </a>
              </p>

              <p>
                <a href="/categories" className="text-reset">
                  Browse All Categories
                </a>
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
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          color: "rgba(0, 0, 0, 0.4)",
        }}
      >
        Footer Template © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    // <!-- Footer -->
  );
}
