import { useContext } from "react";
import { FavouriteContext, LocationContext } from "../../context";

export default function FavouriteListModal() {
  const { favourites } = useContext(FavouriteContext);
  const { setSelectedLocation } = useContext(LocationContext);

  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites.length < 1 && <p>No favourite location added!</p>}

        {favourites.map((favourite) => (
          <li
            key={favourite.location}
            className="hover:bg-gray-200"
            onClick={() => setSelectedLocation({ ...favourite })}
          >
            {favourite.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
