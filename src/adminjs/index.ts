import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database/index.";
import { adminJsResources } from "./resources";
import { Category, Course, Episode, User } from "../models";
import bcrypt from "bcrypt";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authtenticationOptions } from "./authentication";

AdminJS.registerAdapter(AdminJSSequelize);

export const adminjs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminJsResources,
  branding: brandingOptions,
  locale: locale,
  dashboard: dashboardOptions,
});

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminjs,
  authtenticationOptions,
  null,
  {
    resave: false,
    saveUninitialized: false,
  }
);
