import { Link } from "react-router";

const sortParams = [
  {
    id: 1,
    name: "All",
    param: "/forum",
  },
  {
    id: 2,
    name: "Best Rating",
    param: "/forum?top=true",
  },
  {
    id: 3,
    name: "Popular",
    param: "/forum?popular=true",
  },
  {
    id: 4,
    name: "Date Asc",
    param: "/forum?sortBy=date",
  },
  {
    id: 5,
    name: "Date Desc",
    param: "/forum?sortBy=date",
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
