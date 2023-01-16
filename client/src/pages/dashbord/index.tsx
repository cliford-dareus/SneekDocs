import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useGetDocsQuery } from "../../features/api";

export interface Files {
  _id: string;
  name: string;
  user: string;
  content: string;
  favorite: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Home = () => {
  const { data } = useGetDocsQuery({});
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const LENGTH: number = data?.length - 1;

  const prevSlide = () => {
    if (currentSlide == 0) return;
    setCurrentSlide((current) => current - 1);
  };

  const nextSlide = () => {
    if (currentSlide == LENGTH) return;
    setCurrentSlide((current) => current + 1);
  };

  console.log("🚀 ~ file: index.tsx:9 ~ Home ~ data", data);

  return (
    <div className="width-full h-full text-white">
      <Navbar />

      <main className="w-full px-8 py-4">
        <section className="w-full overflow-hidden md:w-3/4 h-60 m-auto flex gap-4">
          <Link
            to="/create"
            className="w-1/5 md:w-48 h-full bg-blue-800 flex items-center justify-center rounded-md"
          >
            Create Doc
          </Link>
          <div className="flex justify-center items-center w-4/5 py-2 bg-white rounded-md relative">
            <div className="w-full h-full flex relative">
              <h2 className="absolute top-2 left-2 text-blue-800 z-10 font-bold">
                Recent
              </h2>
              {data?.map((slide: Files, i: any) => {
                return (
                  <div key={slide._id} className="min-w-full p-4">
                    {currentSlide === i && (
                      <article className="w-full h-full absolute top-0 left-0 p-2 ">
                        {slide.content}
                        <Link
                          to={`document/${slide._id}`}
                          className="absolute py-2 px-4 bg-blue-800 bottom-2 left-1/2 -translate-x-1/2 rounded-md z-20"
                        >
                          Resume
                        </Link>
                      </article>
                    )}
                  </div>
                );
              })}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 bottom-1/2 translate-y-1/2 z-10"
            >
              left
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 bottom-1/2 translate-y-1/2 z-10"
            >
              rigth
            </button>
          </div>
        </section>

        <section className="w-full md:w-3/4 h-96 m-auto mt-8 flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 md:h-full flex h-1/2 bg-blue-900 rounded-md p-2">
            <h2 className="font-bold">Templates</h2>
          </div>
          <div className="w-full md:w-1/2 md:h-full flex flex-col h-1/2 bg-blue-900 rounded-md p-2 pt-8 relative">
            <h2 className="absolute top-2 left-2 font-bold">Your Files</h2>
            {data?.map((file: Files) => {
              return (
                <Link to={`document/${file._id}`} className="border-b mb-2">
                  <p>{file.name}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
