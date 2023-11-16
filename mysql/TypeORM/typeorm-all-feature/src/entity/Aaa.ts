import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

// @Entity 指定它是一个 Entity，name 指定表名为 t_aaa。

// @PrimaryGeneratedColumn 指定它是一个自增的主键，通过 comment 指定注释。

// @Column 映射属性和字段的对应关系。

// 通过 name 指定字段名，type 指定映射的类型，length 指定长度，default 指定默认值。

// nullable 设置 NOT NULL 约束，unique 设置 UNIQUE 唯一索引。

// type 这里指定的都是数据库里的数据类型。

@Entity()
export class Aaa {
  @PrimaryGeneratedColumn({
    comment: '这是id',
  })
  id: number

  @Column({
    name: 'a__aa',
    type: 'text',
    comment: '这是aaa',
  })
  aaa: String

  @Column({
    unique: true,
    nullable: false,
    length: 10,
    type: 'varchar',
    default: 'bbb',
  })
  bbb: String

  @Column({
    type: 'double',
  })
  ccc: number
}
