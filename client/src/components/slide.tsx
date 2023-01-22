import { Link } from "react-router-dom";
import { Files } from "../pages/dashboard";
import { motion } from "framer-motion";

const variants = {
  inView: { opacity: [0, 1] },
  notInView: {},
};

const Slide = ({
  slide,
  currentSlide,
  index,
}: {
  slide: Files;
  currentSlide: number;
  index: number;
}) => {
  return (
    <div key={slide._id} className="min-w-full flex bg-sky-900">
      {currentSlide === index && (
        <motion.article
          className="lg:w-1/2 absolute top-0 left-8 right-8 bottom-0 px-8"
          animate={currentSlide === index ? "inView" : "notInView"}
          variants={variants}
          transition={{ type: "tween", delay: 0.2 }}
        >
          <div className="w-full h-full p-4 flex justify-center items-center">
            <h3 className="">{slide.name}</h3>
          </div>
        </motion.article>
      )}
      <Link
        to={`document/${slide._id}`}
        className="absolute py-2 px-4 bg-sky-600 bottom-2 left-1/2 -translate-x-1/2 rounded-md z-20"
      >
        Resume
      </Link>
    </div>
  );
};

export default Slide;
