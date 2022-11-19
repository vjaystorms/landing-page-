const express = require("express");
const app = express();
const path = require('path');
app.use(express.static("public"));
app.get("/", function(req, res) {
res.sendFile(path.join(__dirname,"/landing_pag.html")
)
})
app.listen(process.env.PORT||3000, function() {
  console.log("Server is up and running at port 3000.");
});
