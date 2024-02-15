import { useContext } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

export default function ToggleFavourite() {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  const isFav = favourites.find((fav) => fav.location === location);

  function handleToggleFav() {
    if (isFav) {
      removeFromFavourites(location);
    } else {
      addToFavourites(latitude, longitude, location);
    }
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleToggleFav}
        >
          <span>Favourite</span>
          <img src={isFav ? RedHeartIcon : HeartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
}
