import { Category_Type } from "../constants/types";
import { useGetAllCategoryQuery } from "../redux/api/categoryApi";
import { Link } from "react-router-dom";

const Category_Section = () => {
  const { data: categories } = useGetAllCategoryQuery(undefined);

  return (
    <div className="mx-auto bg-[#450a0a] py-16">
      <h1 className="text-center text-3xl font-bold mt-10 text-white">Available Categories</h1>
      <p className="text-center text-sm mb-10 text-white">Explore All Categories Available Here for Your Needs!</p>

      <div className="flex justify-around mb-10 max-w-7xl mx-auto">
        {categories?.slice(0, 10).map((one: Category_Type) => (
          <Link
            to="/product"
            state={{ selectedCategory: one?.name }}
            key={one?.category_id}
            className="w-[100px] aspect-square shadow-md text-white text-sm bg-[#5e464a] hover:bg-[#46292d] cursor-pointer border border-gray-500 rounded-full font-semibold p-2 flex justify-center items-center"
          >
            <p>{one?.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category_Section;
