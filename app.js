const express = require("express"); // eslint-disable-line no-undef
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000; // eslint-disable-line no-undef

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`); // eslint-disable-line no-console
});
