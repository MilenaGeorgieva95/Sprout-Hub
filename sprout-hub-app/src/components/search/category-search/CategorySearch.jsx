import { useNavigate } from "react-router";
import styles from "./CategorySearch.module.css";
import { useCategories } from "../../../api/categoriesApi";

export default function CategorySearch() {
  const navigate = useNavigate();
  const {categories, pending}=useCategories();

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
            {pending?<option disabled>Loading...</option>:categories.length>0?categories.map((category) => (
              <option key={category.objectId} value={category.search}>
                {category.name}
              </option>
            )):<option disabled>No categories found.</option>}
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
