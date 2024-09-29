/* eslint-disable quotes */
import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  tegg: {
    enable: true,
    package: "@eggjs/tegg-plugin",
  },
  teggConfig: {
    enable: true,
    package: "@eggjs/tegg-config",
  },
  teggController: {
    enable: true,
    package: "@eggjs/tegg-controller-plugin",
  },
  teggSchedule: {
    enable: true,
    package: "@eggjs/tegg-schedule-plugin",
  },
  teggOrm: {
    package: "@eggjs/tegg-orm-plugin",
    enable: true,
  },
  eventbusModule: {
    enable: true,
    package: "@eggjs/tegg-eventbus-plugin",
  },
  aopModule: {
    enable: true,
    package: "@eggjs/tegg-aop-plugin",
  },
  tracer: {
    enable: true,
    package: "egg-tracer",
  },
  typeboxValidate: {
    enable: true,
    package: "egg-typebox-validate",
  },
  // sequelize: {
  //   enable: false,
  //   package: "egg-sequelize",
  // },
  // validate: {
  //   enable: true,
  //   package: "egg-validate",
  // },
};

export default plugin;
