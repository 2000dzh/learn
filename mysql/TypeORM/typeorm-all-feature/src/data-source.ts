import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
  // type 是数据库的类型，因为 TypeORM 不只支持 MySQL 还支持 postgres、oracle、sqllite 等数据库。
  type: 'mysql',
  host: 'localhost',
  port: 3308,
  username: 'root',
  password: 'admin123',
  database: 'practice',
  // synchronize 是根据同步建表，也就是当 database 里没有和 Entity 对应的表的时候，会自动生成建表 sql 语句并执行
  synchronize: true,
  // logging 是打印生成的 sql 语句。
  logging: false,
  // entities 是指定有哪些和数据库的表对应的 Entity。
  entities: [User],
  // migrations 是修改表结构之类的 sql，暂时用不到
  migrations: [],
  // subscribers 是一些 Entity 生命周期的订阅者，比如 insert、update、remove 前后，可以加入一些逻辑
  subscribers: [],
  // poolSize 是指定数据库连接池中连接的最大数量
  // connectorPackage 是指定用什么驱动包
  connectorPackage: 'mysql2', // 指定用 mysql2 包来连接
  extra: {
    authPlugin: 'sha256_password',
  },
})
