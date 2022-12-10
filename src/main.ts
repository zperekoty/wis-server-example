import * as express from "express";
import { config } from "dotenv";
import * as cors from "cors";

import { errorMessage } from "./scripts";
import { messageRouter } from "./routes";

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/route", messageRouter);

const PORT = process.env.PORT || 7777;

app.get("/", (req, res) =>
  res.send(errorMessage({ message: 'Path: "/" doesn\'t have any data' })),
);

app.listen(PORT, () =>
  console.log(
    `Server successfully started on port ${PORT}\nYou can visit it at: http://localhost:${PORT}`,
  ),
);
