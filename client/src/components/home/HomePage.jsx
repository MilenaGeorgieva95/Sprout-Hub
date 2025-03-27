import { Link } from "react-router";
import Carousel from "../common/carousel/Carousel";
import GreenLogoBar from "../common/logo-bars/green-logo-bar/GreenLogoBar";
import styles from "./HomePage.module.css";
import WhiteLogoBar from "../common/logo-bars/white-logo-bar/WhiteLogoBar";

const categories = [];

export default function HomePage() {
  return (
    <>
      <div
        className={
          "container-fluid header bg-primary p-0 mb-5 " + styles.container
        }
      >
        <div
          className={
            "row g-0 align-items-center  flex-lg-row " + styles.sectionWrapper
          }
        >
          <div className={"col-lg-7 p-5 wow fadeIn " + styles.section}>
            <h2 className={"display-5 text-dark mb-4 " + styles.browseLink}>
              <Link className="display-6 text-dark" to="/posts">
                Browse Posts
              </Link>{" "}
              {}
              <span className={styles.orSpan}>or</span> {}
              <Link to="/posts">
                <span className={styles.textGreen}>
                  View/Modify/Delete Your Posts
                </span>
              </Link>
            </h2>

            <form className="display-5 text-dark mb-5">
              <div className="row g-4 ">
                <div className="col-12 col-sm-6">
                  <select
                    className="form-select border-0"
                    style={{ height: "55px", fontSize: "18px" }}
                  >
                    <option defaultChecked>Search Categories</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="seeds">Seeds</option>
                  </select>
                </div>

                <div className="col-12 col-sm-2">
                  <button
                    className={"btn btn-primary " + styles.searchBtn}
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <WhiteLogoBar />

      <Carousel />
      <GreenLogoBar />
    </>
  );
}
