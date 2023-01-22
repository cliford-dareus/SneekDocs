import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Form from "./Form";
import { IoClose } from "react-icons/io5";

const CreateModal = ({
  setOpenModal,
  openModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <motion.div
      className="absolute w-full flex flex-col items-center h-5/6 p-4 -translate-y-1/2 bg-sky-600 z-50 rounded-md"
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 20 , opacity: 1}}
      exit={{ y: 250, opacity: 0}}
    >
      <button
        className="text-white text-2xl absolute top-4 right-4"
        onClick={() => setOpenModal(false)}
      >
        <IoClose />
      </button>
      <h2 className="text-center text-white text-2xl">Create a Doc</h2>
      <form action="" className="w-full">
        <Form
          name="Title"
          placeholder="Enter a title..."
          value={title}
          type="text"
          onchange={handleChange}
        />
      </form>

      {title?.length > 3 && (
        <Link to={`/create/${title}`} className="text-white py-2 px-4 bg-sky-500 mt-4 rounded-md">
          create
        </Link>
      )}
    </motion.div>
  );
};

export default CreateModal;
