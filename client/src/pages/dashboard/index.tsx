import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateModal from "../../components/createModal";
import Navbar from "../../components/navbar";
import { useGetDocsQuery } from "../../features/api";
import { AnimatePresence, motion } from "framer-motion";
import Slide from "../../components/slide";
import { IoAdd, IoChevronBack, IoChevronForward } from "react-icons/io5";

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

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
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

  return (
    <motion.div
      className="w-full h-screen"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ opacity: 0, width: innerWidth }}
    >
      <Navbar />
      <main className="w-full h-[calc(100%-5rem)] md:h-3/4 p-4 flex flex-col gap-4 mt-20">
        <section className="w-full overflow-hidden md:w-3/4 h-1/3 md:mx-auto flex gap-4 relative">
          <AnimatePresence>
            {openModal && (
              <CreateModal setOpenModal={setOpenModal} openModal={openModal} />
            )}
          </AnimatePresence>
          <div
            onClick={() => setOpenModal(true)}
            className="w-1/5 text-3xl md:w-48 h-full bg-sky-700 flex items-center justify-center rounded-md text-white"
          >
            <IoAdd />
          </div>
          <div className="flex justify-center items-center w-4/5 rounded-md relative text-white overflow-hidden">
            <div className="w-full h-full flex relative ">
              <h2 className="absolute top-2 left-4 text-white z-10 font-bold ">
                Recent
              </h2>
              {data?.map((slide: Files, index: number) => {
                return (
                  <Slide
                    key={slide._id}
                    slide={slide}
                    currentSlide={currentSlide}
                    index={index}
                  />
                );
              })}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-2 bottom-1/2 translate-y-1/2 z-10 text-2xl"
            >
              <IoChevronBack />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 bottom-1/2 translate-y-1/2 z-10 text-2xl"
            >
              <IoChevronForward />
            </button>
          </div>
        </section>

        <section className="w-full md:w-3/4 h-3/5 overflow-hidden flex flex-col md:flex-row md:mx-auto gap-2 text-white">
          <div className="w-full md:w-1/2 md:h-full flex h-1/2 bg-sky-900 rounded-md p-2">
            {/* Make this a filter bar */}
            <h2 className="font-bold">Templates</h2>
          </div>
          <div className="w-full md:w-1/2 md:h-full flex flex-col h-1/2  bg-sky-900 rounded-md relative">
            <h2 className="absolute top-2 left-2 font-bold z-10">Your Files</h2>
            <motion.div
              className="w-full h-full mt-10 px-2 flex flex-col overflow-y-scroll"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {data?.map((file: Files) => {
                return (
                  <motion.div key={file._id} variants={item}>
                    <Link
                      to={`document/${file._id}`}
                      className="bg-sky-700 p-1 rounded-md flex mb-2"
                    >
                      <p>{file.name}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default Home;
