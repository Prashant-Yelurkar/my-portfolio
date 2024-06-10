import { myroter } from "./AxiousInitilizer";

const getSocialMedia = async () => {
  try {
    const response = await myroter.post("/routes", {
      data: "SocialMedia",
    });
    return response;
  } catch (error) {
    return error;
  }
};

const getSkills = async () => {
  try {
    const response = await myroter.post("/routes", {
      data: "Skills",
    });
    return response;
  } catch (error) {
    return error;
  }
};

export { getSocialMedia, getSkills };
