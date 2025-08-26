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
    param: "/posts?sortBy=rating%20desc",
  },
  {
    id: 3,
    name: "Date Asc",
    param: "/posts?sortBy=_createdOn",
  },
  {
    id: 4,
    name: "Date Desc",
    param: "/posts?sortBy=_createdOn%20desc",
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
