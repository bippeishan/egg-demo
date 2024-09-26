/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import {
  Inject,
  HTTPController,
  HTTPMethod,
  HTTPMethodEnum,
  //   SingletonProto,
  ContextProto,
  HTTPBody,
  HTTPQuery,
} from "@eggjs/tegg";
import UsersService from "../service/users";

@ContextProto()
@HTTPController({
  path: "/users",
})
export class UsersController {
  @Inject()
  userService: UsersService;

  @HTTPMethod({
    method: HTTPMethodEnum.POST,
    path: "",
  })
  async create(@HTTPBody() params: any) {
    const { name, email, password, role, responsibility, department } =
      params || {};
    return await this.userService.create({
      name,
      email,
      password,
      role,
      responsibility,
      department,
    });
  }

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: "",
  })
  async findAll(
    @HTTPQuery({ name: "limit" }) limit: string = "10",
    @HTTPQuery({ name: "offset" }) offset: string = "0"
  ) {
    const { userService } = this;
    const result = await userService.findAll({
      limit: Number(limit),
      offset: Number(offset),
    });

    return result;
  }
}
