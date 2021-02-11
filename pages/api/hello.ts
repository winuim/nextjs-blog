import { NextApiRequest, NextApiResponse } from "next";

export const handler = (_: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ text: "Hello" });
};

export default handler;
