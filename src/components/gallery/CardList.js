import React from "react";
import { useGallery } from "../../contexts/galleryContext";

const CardList = () => {
  const { cardItems, removeToCart } = useGallery();
  return (
    <div className="flex flex-col items-start gap-5 px-5 py-10">
      {cardItems?.map((item) => (
        <div
          key={item.id}
          className="flex inline-flex items-center justify-between gap-x-5"
        >
          <img
            src={item.url}
            alt=""
            className="object-cover w-10 h-10 rounded-full"
          />
          <button
            className="p-3 text-sm font-semibold text-white bg-red-400 rounded-lg"
            onClick={() => removeToCart(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardList;
