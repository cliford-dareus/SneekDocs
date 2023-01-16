import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useGetDocsQuery } from "../../features/api";


const Home = () => {
  const { data } = useGetDocsQuery({});
  console.log("🚀 ~ file: index.tsx:9 ~ Home ~ data", data)
  
  return (
    <div className="width-full h-full text-white">
      <Navbar />

      <main className="w-full px-8 py-4">
        <section className="w-full md:w-3/4 h-60 m-auto flex gap-4">
          <Link
            to="/create"
            className="w-full md:w-48 h-full bg-blue-800 flex items-center justify-center rounded-md"
          >
            Create Doc
          </Link>
          <div className="flex w-full bg-slate-500 relative rounded-md">
            <button className="absolute left-0 bottom-1/2 translate-y-1/2 z-10">left</button>

            <button className="absolute right-0 bottom-1/2 translate-y-1/2 z-10">rigth</button>
          </div>
        </section>

        <section className="w-full md:w-3/4 h-96 m-auto mt-8 flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 md:h-full flex h-1/2 bg-blue-900 rounded-md"></div>
          <div className="w-full md:w-1/2 md:h-full flex h-1/2 bg-blue-900 rounded-md"></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
