/* eslint-disable quotes */
import { SingletonProto, AccessLevel, Inject } from "@eggjs/tegg";
import { Model } from "sequelize";
import { ServiceFindAllParams } from "../type";

@SingletonProto({
  // 如果需要在上层使用，需要把 accessLevel 显示声明为 public
  accessLevel: AccessLevel.PUBLIC,
})
export default class UsersService {
  @Inject()
  model: { Users: typeof Model & { new (): Model } }; // ModelCtor<Model>

  // 封装业务
  async create(payload: any) {
    const result = await this.model.Users.create(payload);
    // 判断插入成功
    // const insertSuccess = result.affectedRows === 1;
    return result;
  }

  async findAll(params: ServiceFindAllParams) {
    return await this.model.Users.findAll(params);
  }
}
