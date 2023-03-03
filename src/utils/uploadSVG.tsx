import axios from "axios";

/**
 * @param fileName component name to save.
 * @param svg icon file
 * @param saveLocation location that you want to generate icon component.
 *
 * base location of 'saveLocation' is 'root'.
 * so if you want to generate svg at 'component/icon', then write 'src/component/icon'
 *
 */
const generateIcon = async (svg: string, fileName: string, saveLocation?: string) => {
  return await axios.post("/api/icon", {
    svg,
    fileName,
    saveLocation,
  });
};

const uploadSVG = async (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");

    reader.onload = async (e) => {
      try {
        const result = await generateIcon(e.target?.result as string, file.name.replace(".svg", ""));
        resolve(result);
      } catch (err: any) {
        reject(err.response.data.message);
      }
    };
  });
};

export default uploadSVG;
