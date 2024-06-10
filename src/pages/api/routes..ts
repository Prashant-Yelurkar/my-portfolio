import { getSocialMedia, getSkills } from "@/lib/controller/Controller";

const getFunction: any = {
  SocialMedia: getSocialMediaData(),
  Skills: getSkillsData(),
};
export default async function getData(req: any, res: any) {
  const type = req.body.data;

  try {
    const data = await getFunction[type];
    res.status(200).json({ data: data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

async function getSocialMediaData() {
  try {
    const data = await getSocialMedia();
    return data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getSkillsData() {
  try {
    const data = await getSkills();
    return data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
