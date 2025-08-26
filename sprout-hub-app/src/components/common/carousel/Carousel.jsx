import { useEffect, useState } from "react";
import CarouselCardsContainer from "./CarouselCardsContainer";
import { request } from "../../../utils/requester";
import Spinner from "../spinner/Spinner";

export default function Carousel() {
  const [categories, setCategories] = useState([]);
  const [pending, setPending] = useState(false);
  console.log(categories);
  console.log(pending);

  useEffect(() => {
    setPending(true);
    try {
      request.get("/classes/categories").then((data) => {
        setCategories(data);
        setPending(false);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);
  return (
    <div>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {!pending ? (
          <>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <CarouselCardsContainer categories={categories.slice(0, 4)} />
              </div>
              <div className="carousel-item">
                <CarouselCardsContainer categories={categories.slice(4, 8)} />
              </div>
              <div className="carousel-item">
                <CarouselCardsContainer categories={categories.slice(8, 12)} />
              </div>
            </div>
          </>
        ) : (
          <Spinner />
        )}

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
