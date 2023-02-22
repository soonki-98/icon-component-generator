import axios from "axios";

const uploadSVG = async (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");

    reader.onload = async (e) => {
      await axios
        .post("/api/icon", {
          svg: e.target?.result as string,
          fileName: file.name.replace(".svg", ""),
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => alert(err.response.data.message));
    };
  });
};

export default uploadSVG;
