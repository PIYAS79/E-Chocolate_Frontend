import { useState } from "react";
import { Category_Type } from "../constants/types";
import { FaSearch } from "react-icons/fa";

const Search = ({
  categories,
  handleClickCategorySearch,
  handleNameSearch,
}: {
  categories: Category_Type[];
  handleClickCategorySearch: (ct: string) => void;
  handleNameSearch: (query: string) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");

  const handleCategorySearch = () => {
    handleClickCategorySearch(selectedOption);
  };

  const handleProductNameSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleNameSearch(searchInput);
  };

  return (
    <div className="mb-5 flex justify-between bg-white rounded-xl flex-col items-center md:flex-row">
      <div className="flex gap-2 mb-3 md:mb-0">
        <select
          className="select w-full max-w-xs border border-[#5e464a]"
          value={selectedOption}
          onChange={(e) => {
            const value = e.target.value;
            setSelectedOption(value);
            if (value === "reset") {
              handleClickCategorySearch("reset");
            }
          }}
        >
          <option value="reset">Reset</option>
          <option value="" disabled>
            Search by category
          </option>
          {categories?.map((one: Category_Type) => (
            <option key={one?.category_id} value={one?.name}>
              {one?.name}
            </option>
          ))}
        </select>
        <button className="btn bg-[#5e464a] hover:bg-[#5e464a] text-white" onClick={handleCategorySearch}>
          Search
        </button>
      </div>
      <form className="flex items-center" onSubmit={handleProductNameSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="py-3 relative border border-[#5e464a] text-md rounded-lg px-2 pl-10 outline-none"
          placeholder="Search by product name"
        />
        <FaSearch className="absolute ml-3" />
        <button className="btn ml-2 bg-[#5e464a] hover:bg-[#5e464a] text-white" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
