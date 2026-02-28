import express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());


// Test route
app.get("/", (req, res) => {
  res.send("Backend running!");
});

// start server
const startServer = async () => {
  try {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();