import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const CreateDoc = () => {
  const [value, setValue] = useState<string>("");
  const editorRef = useRef<ReactQuill>(null);
  const editor = editorRef.current?.getEditor();
  const editorPriv = editorRef.current?.makeUnprivilegedEditor(editor!);
  console.log(editorPriv?.getHTML())
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
        style={{color: 'white'}}
      />
    </div>
  );
};

export default CreateDoc;
