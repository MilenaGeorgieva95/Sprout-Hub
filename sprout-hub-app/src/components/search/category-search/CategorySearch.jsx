import { useNavigate } from "react-router";
import styles from "./CategorySearch.module.css";
import categoriesList from "../../../utils/categoriesList";

const categories = categoriesList;
export default function CategorySearch() {
  const navigate = useNavigate();

  const onSelect = (formData) => {
    const category = formData.get("category");
    navigate(`/search?category=${category}`);
  };
  return (
    <form className="display-5 text-dark mb-5" action={onSelect}>
      <div className="row g-4 ">
        <div className="col-12 col-sm-6">
          <select
            className="form-select border-0"
            style={{ height: "55px", fontSize: "18px" }}
            name="category"
          >
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
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
  );
}
