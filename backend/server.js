import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import cors
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
          
app.use(cors());          
app.use(express.json());
app.use("/api/auth", authRoutes); // Use the userRoutes for authentication
app.use("/api/user", userRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
