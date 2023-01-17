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
    console.log("saved");
  };

  console.log(title);
  return (
    <div className="bg-black h-full">
      <div className="w-full py-4 px-8">
        <Link to="/" className="text-2xl text-white">
          SNEEKDOCS
        </Link>
      </div>

      <main className="p-4 h-5/6 bg-white">
        <ReactQuill
          ref={editorRef}
          theme={"snow"}
          value={value}
          onChange={setValue}
          style={{ width: "100%", height: "90%" }}
        />
      </main>

      <ReactQuill
        theme="bubble"
        value={editorPriv?.getHTML()}
        readOnly
        style={{ color: "white" }}
      />

      <button onClick={saveDoc} className="bg-white">
        Save
      </button>
    </div>
  );
};

export default CreateDoc;
