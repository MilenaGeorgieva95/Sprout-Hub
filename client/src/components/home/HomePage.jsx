import { Link, useNavigate } from "react-router";
import Carousel from "../common/carousel/Carousel";
import GreenLogoBar from "../common/logo-bars/green-logo-bar/GreenLogoBar";
import styles from "./HomePage.module.css";
import WhiteLogoBar from "../common/logo-bars/white-logo-bar/WhiteLogoBar";
import CategorySearch from "../search/category-search/CategorySearch";


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
              <Link to="/my-posts">
                <span className={styles.textGreen}>
                  View/Modify/Delete Your Posts
                </span>
              </Link>
            </h2>

           <CategorySearch/>
          </div>
        </div>
      </div>
      <WhiteLogoBar />

      <Carousel />
      <GreenLogoBar />
    </>
  );
}
