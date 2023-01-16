import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useGetDocsQuery } from "../../features/api";
import { Files } from "../dashbord";

const Document = () => {
  const { data } = useGetDocsQuery({});
  const docId = useLocation().pathname.split("document/")[1];
  const [edit, setEdit] = useState<boolean>(true);

  const document: Files[] = data?.filter((file: any) => {
    return file._id === docId;
  });

  console.log(data);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="text-white">
        {document && (
          <ReactQuill readOnly={edit} value={document[0]?.content} />
        )}
      </div>
    </div>
  );
};

export default Document;
