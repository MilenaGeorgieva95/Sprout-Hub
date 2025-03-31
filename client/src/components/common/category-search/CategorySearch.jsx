import { useNavigate } from "react-router";
import styles from './CategorySearch.module.css'

const categories = [ {
    name: "General Gardening Talk",
    logoUrl: "/assets/atat.png",
    description: "For any general gardening discussions",
    _createdOn: 1615737591748,
    _id: "34a1cab1-81f1-47e5-aec3-ab6c9810efe1",
  },
   {
    name: "Landscaping & Garden Design",
    logoUrl: "/assets/rocket.png",
    description: "Design tips, garden planning, landscaping ideas",
    _createdOn: 1615737655083,
    _id: "dc888b1a-400f-47f3-9619-07607966feb8",
  },
   {
    name: "Fast-Growing UK Plants",
    logoUrl: "/assets/hydrant.png",
    description: "Plants that thrive quickly in the UK",
    _createdOn: 1615737688036,
    _id: "733fa9a1-26b6-490d-b299-21f120b2f53a",
  },
   {
    name: "Lawn Care & Organic Lawn Feed",
    logoUrl: "/assets/atat.png",
    description: "Lawn maintenance and organic methods",
    _createdOn: 1615737591748,
    _id: "34a1cab1-81f1-47e5-aec3-ab6c9810efe2",
  },
   {
    name: "Edible Plants",
    logoUrl: "/assets/rocket.png",
    description: "All things edible in the garden",
    _createdOn: 1615737655083,
    _id: "dc888b1a-400f-47f3-9619-07607966feb2",
  },
   {
    name: "Trees, Shrubs & Hedges",
    logoUrl: "/assets/hydrant.png",
    description: "For discussions on larger plants and hedging",
    _createdOn: 1615737688036,
    _id: "733fa9a1-26b6-490d-b299-21f120b2f532",
  },
   {
    name: "Perennials & Roses",
    logoUrl: "/assets/atat.png",
    description: "Perennials and rose varieties, care tips",
    _createdOn: 1615737591748,
    _id: "34a1cab1-81f1-47e5-aec3-ab6c9810efa1",
  },
   {
    name: "Indoor Plants",
    logoUrl: "/assets/rocket.png",
    description: "For all things houseplants",
    _createdOn: 1615737655083,
    _id: "dc888b1a-400f-47f3-9619-07607966fea8",
  },
   {
    name: "Organic Gardening",
    logoUrl: "/assets/hydrant.png",
    description: "Techniques, tips, and advice for organic gardeners",
    _createdOn: 1615737688036,
    _id: "733fa9a1-26b6-490d-b299-21f120b2f43a",
  },
   {
    name: "Compost & Sustainable Practices",
    logoUrl: "/assets/atat.png",
    description: "Composting, recycling, and eco-friendly gardening",
    _createdOn: 1615737591748,
    _id: "34a1cab1-81f1-47e5-aec3-ab6c9810e4e1",
  },
   {
    name: "Pests, Diseases & Plant Health",
    logoUrl: "/assets/rocket.png",
    description: "Troubleshooting garden problems",
    _createdOn: 1615737655083,
    _id: "dc888b1a-400f-47f3-9619-07607966ceb8",
  },
   {
    name: "Gardening Tools & Equipment",
    logoUrl: "/assets/hydrant.png",
    description: "Advice on tools, gadgets, and equipment",
    _createdOn: 1615737688036,
    _id: "733fa9a1-26b6-490d-b299-21f120b2c53a",
  },];

  export default function CategorySearch(){
    const navigate=useNavigate()
  
  const onSelect=(formData)=>{
const category=formData.get('category')
console.log(category);
navigate(`/categories?category=${category}`)}
    return(
        <form className="display-5 text-dark mb-5" action={onSelect}>
        <div className="row g-4 ">
          <div className="col-12 col-sm-6">
            <select
              className="form-select border-0"
              style={{ height: "55px", fontSize: "18px" }}
              name="category"
            >
              <option defaultChecked>Search Categories</option>
              {categories.map(category=> <option key={category._id} value={category.name}>{category.name}</option>)}
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
    )
  }