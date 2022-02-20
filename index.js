import express from "express";

const application = express();
application.use(express.json());

application.post("*", (request, result) => {
  console.log("request:", request.body);
  result.send(request.body);
});

const port = 3005;
application.listen(port, () => {
  console.log(`[semantic-memory-backend] Listening on port ${port}`);
});
