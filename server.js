const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

// Initialize
const app = express();

// Connect DB
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

// Index
app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

// Define Routes
app.use("/api/tracker", require("./routes/api/tracker"));

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
