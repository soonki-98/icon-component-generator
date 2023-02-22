// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { execSync } from "child_process";
import * as fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const handler = (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const filePath = path.join(process.cwd(), "src/assets/icons", `${req.body.fileName.toLowerCase()}.svg`);
    fs.writeFileSync(filePath, req.body.svg);
    execSync("yarn build:svg");

    res.send({
      status: 200,
      success: true,
      message: `Success to convert ${req.body.fileName.toLowerCase()}.svg to component`,
    });
  } catch (err) {
    res.send({
      status: 500,
      success: false,
      message: `Failed to convert ${req.body.fileName.toLowerCase()}.svg to component`,
    });
  }
};

export default handler;
