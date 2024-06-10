import mongoose from "mongoose";

const skilsSchemas = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
});

export const Skills =
  mongoose.models.skills || mongoose.model("skills", skilsSchemas);
