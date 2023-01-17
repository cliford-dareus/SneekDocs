import React, { useState, ChangeEvent } from "react";
import { Link, useAsyncValue } from "react-router-dom";
import Form from "./Form";

const CreateModal = ({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  
  return (
    <div className="absolute w-full h-4/5 p-4 bg-sky-600 z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md">
      <button className="text-white absolute top-4 right-4" onClick={() => setOpenModal(false)}>
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

      {title?.length > 3 && <Link to={`/create/${title}`} className="text-white">Create</Link>}
    </div>
  );
};

export default CreateModal;
