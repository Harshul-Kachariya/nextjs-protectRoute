// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function POST(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { name, email, mobile } = req.body;
  res.status(200).json({ name, email, mobile });
}
