const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(
  cors({
    credentials: true,
    origin: "https://dttechclient.netlify.app",
  })
);

app.get("/", async (req, res) => {
  fetch(
    "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json"
  )
    .then((response) => response.json())
    .then((jsondata) => res.json(jsondata));
});

///////////////////////////////////////////////////////////

const port = 4000;

app.listen("https://dttechserver.onrender.com");
console.log("listening on port " + port);
