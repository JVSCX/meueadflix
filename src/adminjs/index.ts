import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { sequelize } from "../database/index.";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminjs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
})

export const adminJsRouter = AdminJSExpress.buildRouter(adminjs)