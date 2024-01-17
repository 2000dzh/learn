import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { User } from './user/entities/user.entity';
import { Article } from './artice/entities/artice.entity';
import * as fs from 'fs';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @InjectEntityManager()
  // private entityManager: EntityManager;

  // @Get('init-data')
  // async initData() {
  //   await this.entityManager.save(User, {
  //     username: 'dong',
  //     password: '111111',
  //   });
  //   await this.entityManager.save(User, {
  //     username: 'guang',
  //     password: '222222',
  //   });

  //   await this.entityManager.save(Article, {
  //     title: '基于 Axios 封装一个完美的双 token 无感刷新',
  //     content: `用户登录之后，会返回一个用户的标识，之后带上这个标识请求别的接口，就能识别出该用户。

  //     标识登录状态的方案有两种： session 和 jwt。
  //     `,
  //   });

  //   await this.entityManager.save(Article, {
  //     title: 'Three.js 手写跳一跳小游戏',
  //     content: `前几年，跳一跳小游戏火过一段时间。

  //     玩家从一个方块跳到下一个方块，如果没跳过去就算失败，跳过去了就会再出现下一个方块。`,
  //   });
  //   return 'done';
  // }


  @Get('/pdf1')
  async getPdf(@Res() res) {
    const filePath = path.join(__dirname, './ceshipdf.pdf');

    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      throw new Error('文件不存在');
    }

    // 设置响应头
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="file.pdf"');
    // res.header()
    // res.header('Content-Disposition', 'inline; filename="new_filename.pdf"');

    // 创建可读流并通过管道将文件内容发送给响应对象
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  }
}
