import { SocialMedia } from "@/lib/schema/SocialMedia";
import { connectToDatabase } from "@/lib/db/connection";

export const GET = async () => {
  try {
    await connectToDatabase();
    const data = await SocialMedia.find();
    return { result: data };
  } catch (error) {
    console.error("Error in GET function:", error);
    return { result: "Error occurred" };
  }
};
