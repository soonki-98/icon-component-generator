import React, { useRef, useState } from "react";

import * as L from "../component/layout";
import * as Icons from "../component/icon";
import uploadSVG from "@utils/uploadSVG";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setIsLoading(true);
    const result = await uploadSVG(file);
    setIsLoading(false);
    console.log(result);
    if (fileRef && fileRef.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <L.Home>
      <input type="file" accept=".svg" onChange={handleChange} ref={fileRef} />
      <L.Icon>
        {Object.values(Icons).map((Icon, index) => (
          <Icon color="#fff" size={50} key={index} />
        ))}
        {isLoading && <span style={{ color: "#fff" }}>로딩...</span>}
      </L.Icon>
    </L.Home>
  );
}
