# tegg app

[Hacker News](https://news.ycombinator.com/) showcase using [tegg](https://github.com/eggjs/tegg)

## QuickStart

### Development

```bash
npm i
npm run dev
open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
npm run tsc
npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js >= 16.x
- Typescript >= 4.x

### sequelize 自动创建迁移任务

- Use `npx sequelize migration:generate --name=init-users` to manage mysql

### 一些 egg 问题记录

- 需要被@Inject()的模块，文件夹内都需要增加 package.json，否则@Inject()会报错：找不到对应的模块
- @Inject()不能注入 ctx 和 app，在 controller 里需要使用的话，可以在方法中使用@Context() ctx 使用
- 不需要手动定义 router，包含 controller 增加 package.json 会自动生成路由，在 run/router.json 内
- controller 参数校验使用 egg-typebox-validate, 规则定义使用@sinclair/typebox， `Static<typeof createRule>` 可以得到 controller 参数定义
- controller 请求参数，使用@HTTPQuery (Get), @HTTPBody (Post)，(@HTTPQueries、@HTTPParam 不知道为什么拿不到参数; 可能和请求方法有关系：)

```bash
findAll(
    @HTTPQuery({ name: "limit" }) limit: string = "10",
    @HTTPQuery({ name: "offset" }) offset: string = "0"
  )
```

- Model 定义使用 @eggjs/tegg-orm-plugin， (Sequelize 好像也行，看 cnpmCore 仓库里用的是 orm)
- Model orm 配套使用 leoric
  https://leoric.js.org/zh/
- cnpmcore 仓库是完全使用 tegg 实现的，可以参考
  https://github.com/cnpm/cnpmcore/tree/master
- 数据库迁移任务
  https://leoric.js.org/zh/migrations/
