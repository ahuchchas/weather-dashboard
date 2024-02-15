import { useContext, useState } from "react";
import SearchImage from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);

  const doSearch = useDebounce((searchTerm) => {
    const fetchedLocation = getLocationByName(searchTerm);
    setSelectedLocation({ ...fetchedLocation });
  }, 1000);

  function handleChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    // doSearch(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    doSearch(searchTerm);
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={(e) => handleChange(e)}
          required
        />
        <button type="submit">
          <img src={SearchImage} />
        </button>
      </div>
    </form>
  );
}
