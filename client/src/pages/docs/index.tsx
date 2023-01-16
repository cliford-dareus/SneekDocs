import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";

const Document = () => {
  const docId = useLocation().pathname.split(":")[1];

  useEffect(() => {
    console.log("🚀 ~ file: index.tsx:6 ~ Document ~ docId", docId);
  }, []);

  return (
    <div className="w-full h-full">
        <Navbar />
        <div>

        </div>
    </div>
    )
};

export default Document;
