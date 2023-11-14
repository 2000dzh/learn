import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3308,
  username: 'root',
  password: 'admin123',
  database: 'practice',
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: [],
  subscribers: [],
  connectorPackage: 'mysql2', // 指定用 mysql2 包来连接
  extra: {
    authPlugin: 'sha256_password',
  },
})
