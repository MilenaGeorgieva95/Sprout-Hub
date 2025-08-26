import { Link } from "react-router";

export default function CarouselCard({ category }) {
  return (
    <div className="card" style={{ width: "25%" }}>
      <Link
        to={`/search?category=${category.name}`}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
        }}
      >
        <img
          src={category.logoUrl}
          style={{ height: "15em" }}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{category.name}</h5>
          <p className="card-text">{category.description}</p>
        </div>
      </Link>
    </div>
  );
}
