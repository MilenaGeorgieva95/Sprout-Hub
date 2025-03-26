import { Link } from "react-router";

const sortParams = [
  {
    id: 1,
    name: "All",
    param: "/posts",
  },
  {
    id: 2,
    name: "Best Rating",
    param: "/posts?top=true",
  },
  {
    id: 3,
    name: "Popular",
    param: "/posts?popular=true",
  },
  {
    id: 4,
    name: "Date Asc",
    param: "/posts?sortBy=date",
  },
  {
    id: 5,
    name: "Date Desc",
    param: "/posts?sortBy=date",
  },
];

export default function SortBtn() {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="my-2 btn btn-success dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By
      </button>
      <ul className="dropdown-menu">
        {sortParams.map((param) => {
          return (
            <li key={param.id}>
              <Link className="dropdown-item" to={param.param}>
                {param.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
