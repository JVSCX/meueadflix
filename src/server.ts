import express from "express";
import { adminjs, adminJsRouter } from "./adminjs";
import { sequelize } from "./database/index.";

const app = express();

app.use(adminjs.options.rootPath, adminJsRouter)

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("DB connection successfull.");
  });

  console.log(`Server started successfuly at port ${PORT}.`);
});
