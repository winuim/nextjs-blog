import { NextApiRequest, NextApiResponse } from "next";

export const hello = (_: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ text: "Hello" });
};

export default hello;
