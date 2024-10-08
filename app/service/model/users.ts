/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { Attribute, Model } from "@eggjs/tegg/orm";
import { DataTypes, Bone } from "leoric";

@Model()
export class Users extends Bone {
  @Attribute(DataTypes.BIGINT, {
    primary: true,
    autoIncrement: true,
  })
  id: bigint;

  @Attribute(DataTypes.STRING(255))
  name: string;

  @Attribute(DataTypes.STRING(255))
  email: string;

  @Attribute(DataTypes.STRING(255))
  password: string;

  @Attribute(DataTypes.STRING(255))
  role: string;

  @Attribute(DataTypes.STRING(255))
  responsibility: string;

  @Attribute(DataTypes.STRING(255))
  department: string;

  @Attribute(DataTypes.DATE, { name: "created_at" })
  created_at: Date;

  @Attribute(DataTypes.DATE, { name: "updated_at" })
  updated_at: Date;
}

// export default (app: any) => {
//   const { STRING, INTEGER, DATE } = app.Sequelize;
//   const Users = app.model.define(
//     "users",
//     {
//       id: { type: INTEGER, primaryKey: true, autoIncrement: true },
//       name: STRING(255),
//       email: STRING(255),
//       password: STRING(255),
//       role: STRING(255),
//       responsibility: STRING(255),
//       department: STRING(255),
//       created_at: DATE,
//       updated_at: DATE,
//     },
//     {
//       timestamps: true, // 自动增加创建时间
//       tableName: "users", // 设置表名称,
//       freezeTableName: true, // 禁止修改表名
//     }
//   );

//   // 更新表结构
//   Users.sync({ force: false });

//   return Users;
// };
