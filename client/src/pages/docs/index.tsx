import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Link, useLocation } from "react-router-dom";
import { useEditDocMutation, useGetDocsQuery } from "../../features/api";
import { Files } from "../dashboard";

interface Editable {
  title: string;
  content: string;
}

const Document = () => {
  const { data } = useGetDocsQuery({});
  const [ save ] = useEditDocMutation();
  const docId = useLocation().pathname.split("document/")[1];
  const [editData, setEditData] = useState<Editable | null>(null);
  const [edit, setEdit] = useState<boolean>(true);

  const saveEdit = () => {
    if (!edit) {
      // save the new data
      save({...editData, id: docId})
    }
  };

  const editContent = (e: string) => {
    if (!editData) return;
    setEditData({ ...editData, content: e });
  };

  useEffect(() => {
    if (!data) return;
    const document = data?.filter((file: Files) => {
      return file._id === docId;
    });

    setEditData({
      title: document[0]?.name,
      content: document[0]?.content,
    });
  }, [data]);

  console.log(data);

  return (
    <div className="w-full h-full bg-black">
      <div className="w-full py-4 px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl text-white">
          SNEEKDOCS
        </Link>

        <div className="flex gap-2">
          <button
            className="px-4 py-1 bg-blue-800 text-white rounded-md"
            onClick={saveEdit}
          >
            Save
          </button>
          <button
            className="px-4 py-1 bg-blue-800 text-white rounded-md"
            onClick={() => setEdit(!edit)}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="text-white h-5/6 overflow-hidden bg-white">
        {document && (
          <ReactQuill
            readOnly={edit}
            value={editData?.content}
            onChange={editContent}
            style={{ height: "90%", color: "black" }}
          />
        )}
      </div>
    </div>
  );
};

export default Document;
