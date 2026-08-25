const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything inside the public folder
app.use(express.static(path.join(__dirname, "public")));

// Send index.html for other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Only listen when running locally
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`MyGame Universe running on port ${PORT}`);
  });
}

module.exports = app;
