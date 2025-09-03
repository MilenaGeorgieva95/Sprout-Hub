import { Link, useNavigate, useSearchParams } from "react-router";
import CategorySearch from "../category-search/CategorySearch";
import { useCategory } from "../../../api/categoriesApi";
import { usePost } from "../../../api/postsApi";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category=searchParams.get('category')

  const {pending, posts}=useCategory(category);
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Categories</h2>

        <CategorySearch/>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {pending?<div>Loading ...</div>:posts.length>0?posts.map((post) => (
            <Link key={post.objectId} to={`/posts/${post.objectId}/details`} className="group" style={{textDecoration: "none"}}>
              <img
                alt={post.title}
                src={post.imageUrl}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{post.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {post.text}
              </p>
            </Link>
          )):<div>There aren't any posts in this category yet.</div>}
        </div>
      </div>
    </div>
  );
}
