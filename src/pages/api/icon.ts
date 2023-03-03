import * as fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { transform } from "@svgr/core";

import capitalize from "@utils/capitalize";
import propTypesTemplate from "plugins/propsTypesTemplate";

const checkDuplication = (existComponentList: string[], componentName: string) => {
  let isDuplicated = false;

  for (const component of existComponentList) {
    if (capitalize(component.replace(".tsx", "")) === componentName) {
      isDuplicated = true;
      return;
    }
  }

  return isDuplicated;
};

/**
 * @param fileName component name to save.
 * @param svg icon file
 * @param saveLocation location that you want to generate icon component
 */
const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const { fileName, svg, saveLocation } = req.body;

    const componentRoute = [process.cwd(), saveLocation || "src/component/icon"];
    const componentName = capitalize(fileName);

    const componentPath = path.join(...componentRoute, `${componentName}.tsx`);
    const indexFilePath = path.join(...componentRoute, "index.ts");

    const indexFile = fs.readFileSync(indexFilePath, { encoding: "utf-8" });
    const existComponentList = fs.readdirSync(componentRoute.join("/"));

    const isDuplicated = checkDuplication(existComponentList, componentName);

    if (isDuplicated) {
      res.status(400).send({
        success: false,
        message: `${fileName} is already exist`,
      });
    }

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

    fs.writeFileSync(componentPath, result);
    fs.writeFileSync(indexFilePath, `${indexFile}export { default as ${componentName} } from "./${componentName}"; `);

    res.status(200).send({
      success: true,
      message: `Success to convert ${componentName}.svg to component`,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: `Failed to convert`,
    });
  }
};

export default handler;
