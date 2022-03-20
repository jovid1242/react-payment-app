const express = require("express");
const cors = require("cors");
const api = require("./routes/api");

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`APP app listening aat http://localhost:${PORT}`);
});
