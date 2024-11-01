import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as fs from 'fs';
import { AppService } from './app.service';

const uploadStorage = multer.diskStorage({
  destination(req, file, callback) {
    try {
      fs.mkdirSync('react-uploads');
    } catch {}

    callback(null, 'react-uploads');
  },
  // 文件名为时间戳-随机数-文件名的格式
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() +
      '-' +
      Math.round(Math.random() * 1e9) +
      '-' +
      file.originalname;
    cb(null, uniqueSuffix);
  },
});

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      dest: 'react-upload',
      storage: uploadStorage,
      limits: {
        fieldSize: 1024 * 1024 * 3,
      },
    }),
  )
  upload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    console.log(decodeURIComponent(escape(file.originalname)));
    return '你好';
  }
}
