const express = require("express"), //load express module
  app = express();

app.use(express.static("public"));

const breedNameList = () => {
  const breedObj = {
    affenpinscher: [],
    african: [],
    chihuahua: [],
    greyhound: ["italian"],
  };
  return breedObj;
};
//creates the server for breeds
app.get("/breeds", (req, res) => {
  res.json(breedNameList());
});

const breedsWithImg = {
  affenpinscher: ["affen1.jpeg", "affen2.jpeg", "affen3.jpeg"],
  african: ["afri1.jpeg", "afri2.jpeg", "afri3.jpeg"],
  chihuahua: ["chi1.jpeg", "chi2.jpeg", "chi3.jpeg"],
  greyhound: ["itaGrey1.jpeg", "itaGrey2.jpeg", "itaGrey3.jpeg"],
};

//creates the server to generate random image link for specific breed Name
app.get("/image/:breedName", (req, res) => {
  let { breedName } = req.params;
  if (breedName in breedsWithImg && breedsWithImg[breedName]?.length > 1) {
    let breedNameArray = breedsWithImg[breedName];
    res
      .status(200)
      .contentType("application/json")
      .send({
        status: "success",
        message:
          "http://localhost:3000/img/" +
          `${breedName}/${
            breedNameArray[Math.floor(Math.random() * breedNameArray.length)]
          }`,
      });
  } else {
    res.status(404).send({
      status: "error",
      message: "Breed hasn't found",
    });
  }
});

app.all("*", (req, res) => {
  res.status(404);
  res.send("Sorry, this page doesn't exist!");
});
app.listen(3000, () => {
  console.log("Listening at http://localhost:3000/");
});
