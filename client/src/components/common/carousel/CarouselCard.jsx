import { Link } from "react-router";

export default function CarouselCard({ category }) {
  return (
    <div className="card" style={{ width: "25%" }}>
      <img src={category.logoUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{category.name}</h5>
        <p className="card-text">{category.description}</p>
        <Link
          to={`/search?category=${category.name}`}
          className="btn btn-primary"
        >
          Categories
        </Link>
      </div>
    </div>
  );
}
