import mongoose from "mongoose";

const socialMediaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const SocialMedia =
  mongoose.models.socialmedias ||
  mongoose.model("socialmedias", socialMediaSchema);
