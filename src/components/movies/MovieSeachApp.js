import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

// https://api.themoviedb.org/3/movie/550?api_key=0d3b2005b0dcb775cf17c8a021f6d832
// search : https://api.themoviedb.org/3/search/movie?api_key=0d3b2005b0dcb775cf17c8a021f6d832&query=''
// link hinh anh : https://image.tmdb.org/t/p/w220_and_h330_face/o5hdBcCUHRTnav6KVwtowZkYVZp.jpg

const fetchData = async (keyword = `''`) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=0d3b2005b0dcb775cf17c8a021f6d832&query=${keyword}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const MovieSeachApp = () => {
  const [movies, setMovies] = useState();

  const handleLoadMovie = useRef({});
  handleLoadMovie.current = async () => {
    const dataMovie = await fetchData();
    setMovies(dataMovie);
  };

  useEffect(() => {
    handleLoadMovie.current();
  }, []);
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className="w-full p-5 rounded-lg border  border-purple-200 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)] focus:outline-none"
          placeholder="Search movie"
        />
      </div>
      <div className="grid grid-cols-3 gap-10">
        {movies?.map((item, index) => (
          <MovieItem key={item.id} data={item}></MovieItem>
        ))}
      </div>
    </div>
  );
};
const MovieItem = ({ data }) => {
  const { title, overview, voteAverage, poster_path } = data;
  const iamgeDefault =
    "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  const url = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : iamgeDefault;
  return (
    <div className={`bg-white p-3 rounded-2xl shadow-md`}>
      <div className="h-[297px]">
        <img
          src={`${url}`}
          alt="image1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <h3 className="text-xl text-black font-semibold mb-4">{title}</h3>
        <p className="text-[#999] text-sm mb-6 !leading-loose">{overview}</p>
        <div className="flex item-center gap-x-3 mt-auto">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-sm font-semibold text-[#333]">
            {voteAverage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSeachApp;
