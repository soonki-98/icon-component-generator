import React, { useRef } from "react";
import axios from "axios";

import * as L from "../component/layout";
import * as Icons from "../component/icon";

export default function Home() {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleDocumentUpload = (file: File) => {
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");

    reader.onload = async (e) => {
      await axios.post("/api/icon", {
        svg: e.target?.result as string,
        fileName: file.name.replace(".svg", ""),
      });
    };
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleDocumentUpload(file);
    }

    if (fileRef && fileRef.current) {
      fileRef.current.value = "";
    }
  };
  return (
    <L.Home>
      <input type="file" accept=".svg" onChange={handleFileUpload} ref={fileRef} />
      <L.Icon>
        {Object.values(Icons).map((Icon, index) => (
          <Icon color="#fff" size={50} key={index} />
        ))}
      </L.Icon>
    </L.Home>
  );
}
