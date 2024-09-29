/* eslint-disable quotes */
import { Type } from "@sinclair/typebox";

enum Role {
  "DEVELOPER",
  "TESTER",
}
enum Responsibility {
  "TEAM_MEMBER",
  "TEAM_LEADER",
}

// 定义创建接口的请求参数规则
const createRule = Type.Object({
  name: Type.String(),
  email: Type.String(),
  password: Type.String(),
  role: Type.Enum(Role),
  responsibility: Type.Enum(Responsibility),
  department: Type.String(),
});

export { createRule };
