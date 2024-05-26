import mongoose from "mongoose";

const { mongoUsername, mongoPassword } = process.env;
const connectionLink =
  "mongodb+srv://" +
  mongoUsername +
  ":" +
  mongoPassword +
  "@prashant.vfhku0l.mongodb.net/my-portfolio";

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(connectionLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  }
};
