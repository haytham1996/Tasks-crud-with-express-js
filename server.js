import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// Body parser for requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
