const express = require("express"); // loads express module
const nedb = require("nedb-promises"); // loads nedb module
const app = express();
const db = nedb.create("hits.jsonl"); // init database

app.use(express.static("public")); // enables static routing
app.use("/hits", (req, res) => {
  db.findOne({ hits: { $exists: true } }).then((doc) => {
    if (doc) {
      db.updateOne(
        {hits:{$exists:true}},
        {hits:doc.hits+1},
        {upsert:true}
      )
      res
        .status(200)
        .contentType("application/json")
        .send((doc.hits + 1).toString());
      console.log(doc.hits + 1);
    }
    else{
      res.status(404).contentType("text/plain").send("No file exits for hits!");
    }
  });
});

app.all("*", (req, res) => {
  res.status(404).send("Sorry! There is no such page!");
});

app.listen(3000, () => console.log("Listening to http://localhost:3000/"));
