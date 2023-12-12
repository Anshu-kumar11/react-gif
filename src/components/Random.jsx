import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border-black border flex flex-col items-center gap-y-5 mt-[15px] py-2 px-5">
      <h1 className="text-3xl uppercase underline font-semibold mt-[15px]">
        A Random Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" alt="gifs" />}

      <button
        onClick={() => fetchData()}
        className="bg-green-200 w-10/12 text-lg py-2 px-5 rounded-md mb-[15px] hover:bg-green-100 transition-all duration-200"
      >
        Generate
      </button>
    </div>
  );
}
