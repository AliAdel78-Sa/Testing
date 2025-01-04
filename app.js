const express = require("express");
const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
	res.status(200).send("Hello World I Am Ali Adel Ahmed");
});

app.listen(5000, () => {
	console.log("Server Is Running On Port 5000");
});
