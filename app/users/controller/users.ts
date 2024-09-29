/* eslint-disable array-bracket-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import {
  Inject,
  HTTPController,
  HTTPMethod,
  HTTPMethodEnum,
  HTTPBody,
  HTTPQuery,
  SingletonProto,
  Context,
} from "@eggjs/tegg";
import { Static } from "@sinclair/typebox";

import UsersService from "../../service/users";
import { createRule } from "./type";

@HTTPController({
  path: "/users",
})
@SingletonProto({})
export class UsersController {
  @Inject()
  userService: UsersService;

  @HTTPMethod({
    method: HTTPMethodEnum.POST,
    path: "",
  })
  async create(@Context() ctx, @HTTPBody() params: Static<typeof createRule>) {
    ctx.tValidate(createRule, params);

    return await this.userService.create(params);
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
