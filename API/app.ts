import express from "express";
import cors from "cors";
import { checkCorsOrigin } from "./utils/cors";
import routes from "./routes";
export const app = express();
const port = process.env.NODE_LOCAL_PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => checkCorsOrigin(origin, callback),
    credentials: true,
  })
);

app.use(routes);

export const server = app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
