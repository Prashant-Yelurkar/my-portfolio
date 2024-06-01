import { GET } from "@/lib/controller/Controller";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function getSocialMedia(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await GET();

    res.status(200).json(data.result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

// export { getSocialMedia };

// export async function getSocialMedia() {
//   try {
//     const data = await GET();
//     return data;
//   } catch {
//     console.log("Error");
//   }
// }
