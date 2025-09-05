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
            <section className="py-16 px-6 text-center">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-green-800 mb-4">
                  Welcome to the Gardening Forum
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  Share your tips, ask questions, and connect with fellow plant
                  enthusiasts. Whether you’re growing herbs on your balcony or
                  managing a full backyard garden, this is your place to grow
                  together.
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    to="/posts"
                    className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
                  >
                    Explore Discussions
                  </Link>
                  <Link
                    to="/register"
                    className="bg-white text-green-700 border border-green-600 px-6 py-3 rounded-xl shadow hover:bg-green-100 transition"
                  >
                    Join the Community
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <WhiteLogoBar />
      <div className={styles.offersBar}>
        <Carousel />
      </div>

      <GreenLogoBar />
    </>
  );
}
