import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {
  const [tag, setTag] = useState("");

  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-400 rounded-lg border-black border flex flex-col items-center gap-y-5 mt-[15px] py-2 px-5">
      <h1 className="text-3xl uppercase underline font-semibold mt-[15px]">
        Random {tag} Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" alt="gifs" />}

      <input
        className="w-10/12 py-2 px-5 text-lg rounded-mb mb-[3px] text-center outline-none"
        onChange={(e) => setTag(e.target.value)}
        value={tag}
        placeholder="Write Gif Name"
      />

      <button
        onClick={() => fetchData(tag)}
        className="bg-blue-200 w-10/12 text-lg py-2 px-5 rounded-md mb-[15px] hover:bg-blue-100 transition-all duration-200"
      >
        Generate
      </button>
    </div>
  );
}
