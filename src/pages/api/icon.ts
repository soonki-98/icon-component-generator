import * as fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { transform } from "@svgr/core";

import capitalize from "@utils/capitalize";
import propTypesTemplate from "plugins/propsTypesTemplate";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const { fileName, svg } = req.body;
    const defaultPath = [process.cwd(), "src/component/icon"];
    const componentName = capitalize(fileName);

    const componentFilePath = path.join(...defaultPath, `${componentName}.tsx`);
    const indexFilePath = path.join(...defaultPath, "index.ts");
    const indexFile = fs.readFileSync(indexFilePath, { encoding: "utf-8" });

    const result = await transform(
      svg,
      {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
        icon: true,
        template: propTypesTemplate,
        typescript: true,
      },
      { componentName }
    );

    fs.writeFileSync(componentFilePath, result);
    fs.writeFileSync(indexFilePath, `${indexFile}export { default as ${componentName} } from "./${componentName}"; `);

    res.send({
      status: 200,
      success: true,
      message: `Success to convert ${componentName}.svg to component`,
    });
  } catch (err) {
    res.send({
      status: 500,
      success: false,
      message: `Failed to convert`,
    });
  }
};

export default handler;
