const express = require("express");
const path = require("path");
const app = express();

// Cấu hình view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Public folder
app.use(express.static(path.join(__dirname, "public")));

// Tắt cache (không bắt buộc, nhưng bạn có thêm)
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
  next();
});

// Routes
const cvRoutes = require("./cvRoutes");
app.use("/", cvRoutes);

// Start server (Render sẽ cấp PORT động)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

