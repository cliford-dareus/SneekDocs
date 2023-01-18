import React, { useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { Link, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { useCreateDocMutation } from "../../features/api";

const CreateDoc = () => {
  const { title } = useParams()
  const [value, setValue] = useState<string>("");
  const editorRef = useRef<ReactQuill>(null);
  const editor = editorRef.current?.getEditor();
  const editorPriv = editorRef.current?.makeUnprivilegedEditor(editor!);
  const [create] = useCreateDocMutation();

  const saveDoc = async () => {
    await create({ content: value, name: title });
  };

  return (
    <div className="bg-black h-full">
      <div className="w-full p-4 h-20 flex justify-between items-center">
        <Link to="/" className="text-2xl text-white">
          SNEEKDOCS
        </Link>

        <div className="flex gap-2">
          <button
            className="px-4 py-1 bg-blue-800 text-white rounded-md"
            onClick={saveDoc}
          >
            Save
          </button>
        </div>
      </div>

      <main className="p-4 h-[calc(100%-5rem)] bg-white">
        <ReactQuill
          ref={editorRef}
          theme={"snow"}
          value={value}
          onChange={setValue}
          style={{ width: "100%", height: "90%"}}
        />
      </main>
    </div>
  );
};

export default CreateDoc;
