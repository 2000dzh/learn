import { AppDataSource } from './data-source'
import { User } from './entity/User'

AppDataSource.initialize()
  .then(async () => {
    console.log('Inserting a new user into the database...')
    // 新增
    // const user = new User()
    // user.firstName = 'Timber'
    // user.lastName = 'Saw'
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log('Saved a new user with id: ' + user.id)

    // 修改
    // 当你指定了 id 的时候，typeorm 会先查询这个 id 的记录，如果查到了，那就执行 update
    const user2 = new User()
    user2.id = 1
    user2.firstName = 'ceshi'
    user2.lastName = 'ceshi'
    user2.age = 22
    await AppDataSource.manager.save(user2)

    // 批量新增修改操作
    await AppDataSource.manager.save(User, [
      { firstName: 'ccc', lastName: 'ccc', age: 21 },
      { firstName: 'ddd', lastName: 'ddd', age: 22 },
      { firstName: 'eee', lastName: 'eee', age: 23 },
    ])

    // 删除和批量删除
    await AppDataSource.manager.delete(User, 1)
    await AppDataSource.manager.delete(User, [2, 3])
    // delete 和 remove 的区别是，delete 直接传 id、而 remove 则是传入 entity 对象。
    // const user = new User();
    // user.id = 1;
    // await AppDataSource.manager.remove(User, user);

    const users = await AppDataSource.manager.find(User)
    console.log('Loaded users: ', users)

    // 条件查询
    const user3 = await AppDataSource.manager.findBy(User, {
      age: 21,
    })
    console.log(user3)

    // 获取数据库所有数据和总数(也可以指定第二个参数查询条件)
    // const [users4, count] = await AppDataSource.manager.findAndCount(User);
    // console.log(users4, count);

    // 只查询一条
    // 指定查询的 where 条件是 id 为 4 ，指定 select 的列为 firstName 和 age，然后 order 指定根据 age 升序排列
    // const user4 = await AppDataSource.manager.findOne(User, {
    //   select: {
    //     firstName: true,
    //     age: true,
    //   },
    //   where: {
    //     id: 4,
    //   },
    //   order: {
    //     age: 'ASC',
    //   },
    // })

    // findOneOrFail 或者 findOneByOrFail，如果没找到，会抛一个 EntityNotFoundError 的异常

    // 也可以直接执行 sql 语句
    const user5 = await AppDataSource.manager.query('select * from user where age in(?, ?)', [21, 22]);
    console.log(user5);


  })
  .catch((error) => console.log(error))
