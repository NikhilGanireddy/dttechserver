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
    origin: "http://localhost:5173",
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

app.listen(port);
console.log("listening on port " + port);



// git branch -M main
// git remote add origin https://github.com/NikhilGanireddy/DtTechHiringAlpha1.git
// git push -u origin main