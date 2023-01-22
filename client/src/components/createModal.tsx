import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import Form from "./Form";


const CreateModal = ({
  setOpenModal, openModal
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>, openModal: boolean
}) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  
  return (
    <motion.div
      className="absolute w-full h-4/5 p-4 -translate-y-1/2 bg-sky-600 z-50 rounded-md"
      initial={{y: -100, }}
      animate={{y: 25}}
    >
      <button
        className="text-white absolute top-4 right-4"
        onClick={() => setOpenModal(false)}
      >
        X
      </button>
      <form action="">
        <Form
          name="Create a Doc"
          placeholder="Enter a title..."
          value={title}
          type="text"
          onchange={handleChange}
        />
      </form>

      {title?.length > 3 && (
        <Link to={`/create/${title}`} className="text-white">
          Create
        </Link>
      )}
    </motion.div>
  );
};

export default CreateModal;
