import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Link, useLocation } from "react-router-dom";
import { useGetDocsQuery } from "../../features/api";
import { Files } from "../dashboard";

const Document = () => {
  const { data } = useGetDocsQuery({});
  const docId = useLocation().pathname.split("document/")[1];
  const [edit, setEdit] = useState<boolean>(true);

  const document: Files[] = data?.filter((file: any) => {
    return file._id === docId;
  });

  console.log(data);

  return (
    <div className="w-full h-full bg-black">
      <div className="w-full py-4 px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl text-white">
          SNEEKDOCS
        </Link>

        <div className="flex gap-2">
          <button className="px-4 py-1 bg-blue-800 text-white rounded-md">
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
            value={document[0]?.content}
            style={{ height: "90%", color: 'black' }}
          />
        )}
      </div>
    </div>
  );
};

export default Document;
