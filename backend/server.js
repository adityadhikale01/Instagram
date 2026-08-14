import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import authRoutes from "./features/auth/auth.routes.js";


dotenv.config();

const app = express();

app.use(express.json());

// Connect database
connectDB();

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});
// app.get("/api/login", (req, res) => {
//     console.login("Login route accessed");
//     res.status(200).json({  
//         success: true,
//         message: "Login route is working",
//     });
// });
// app.post("/api/register", (req, res) => {
//     console.log("Register route accessed");
//     res.status(200).json({
//         success: true,
//         message: "Register route is working",
//     });
// });

app.use("/api/auth", authRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});