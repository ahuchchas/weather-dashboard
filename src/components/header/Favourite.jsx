import FavImg from "../../assets/heart.svg";

export default function Favourite({ onFavClick }) {
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onFavClick}
    >
      <img src={FavImg} alt="favourite" />
      <span>Favourite Locations</span>
    </div>
  );
}
