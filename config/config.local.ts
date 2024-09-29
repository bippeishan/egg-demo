/* eslint-disable quotes */
import { EggAppConfig, PowerPartial } from "egg";

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3306,
    database: "yunmo",
    username: "root",
    password: "ykabps1314",
  };

  config.orm = {
    client: "mysql2",
    database: "yunmo",
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "ykabps1314",
    charset: "utf8mb4",
  };

  return config;
};
