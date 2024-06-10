import { SocialMedia } from "@/lib/schema/SocialMedia";
import { connectToDatabase } from "@/lib/db/connection";
import { Skills } from "../schema/Skills";

export const getSocialMedia = async () => {
  try {
    await connectToDatabase();
    const data = await SocialMedia.find();
    return { result: data };
  } catch (error) {
    console.error("Error in GET function:", error);
    return { result: "Error occurred" };
  }
};

export const getSkills = async () => {
  try {
    await connectToDatabase();
    const data = await Skills.find();
    return { result: data };
  } catch (error) {
    console.error("Error in GET function:", error);
    return { result: "Error occurred" };
  }
};
