import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const getRandomPhotos = async (page) => {
  try {
    const respone = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return respone.data;
  } catch (error) {
    console.error(error);
  }
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadMorePhotos = useRef({});
  handleLoadMorePhotos.current = async () => {
    const images = await getRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextPage((nextPage) => nextPage + 1);
  };
  useEffect(() => {
    handleLoadMorePhotos.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos?.map((item, index) => (
          <div
            key={`${item.download_url}${index}`}
            className="p-3 bg-white shadow-md rounded-lg h-[200px]"
          >
            <img
              src={item.download_url}
              alt={item.author}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMorePhotos.current}
          className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg"
        >
          LoadMore
        </button>
      </div>
    </div>
  );
};

export default Photos;
