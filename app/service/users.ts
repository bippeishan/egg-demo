/* eslint-disable quotes */
import { SingletonProto, AccessLevel, Inject } from "@eggjs/tegg";
// import { Model } from "sequelize";
import { ServiceFindAllParams } from "./type";
import type { Users as UsersModel } from "./model/users";

@SingletonProto({
  // 如果需要在上层使用，需要把 accessLevel 显示声明为 public
  accessLevel: AccessLevel.PUBLIC,
})
export default class UsersService {
  // @Inject()
  // model: { Users: typeof Model & { new (): Model } }; // ModelCtor<Model>

  // @Inject()
  // model: { Users: typeof UsersModel };

  @Inject()
  private readonly Users: typeof UsersModel;

  // 封装业务
  async create(payload: any) {
    const result = await this.Users.create(payload);
    // 判断插入成功
    // const insertSuccess = result.affectedRows === 1;
    return result;
  }

  async findAll(params: ServiceFindAllParams) {
    const { limit = 10, offset = 0 } = params;

    const totalCount = await this.Users.count();
    const infos = await this.Users.all.offset(offset).limit(limit);

    return {
      infos,
      totalCount,
    };
  }
}
