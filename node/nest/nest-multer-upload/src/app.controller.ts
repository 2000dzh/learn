import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  HttpException,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { storage } from './my-file-storage';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 上传单个文件
  @Post('aaa')
  @UseInterceptors(
    FileInterceptor('aaa', {
      dest: 'uploads',
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log('body', body);
    console.log('file', file);
  }

  // 上传多个文件
  @Post('bbb')
  @UseInterceptors(
    FilesInterceptor('bbb', 3, {
      dest: 'uploads',
    }),
  )
  uploadFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('file', files);
  }

  // 指定哪些字段是文件
  @Post('ccc')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        {
          name: 'aaa',
          maxCount: 2,
        },
        {
          name: 'bbb',
          maxCount: 3,
        },
      ],
      {
        dest: 'uploads',
      },
    ),
  )
  uploadFileFields(
    @UploadedFiles()
    files: {
      aaa?: Array<Express.Multer.File>;
      bbb?: Array<Express.Multer.File>;
    },
    @Body() body,
  ) {
    console.log('body', body);
    console.log('file', files);
  }

  // 并不知道有哪些字段是 file
  @Post('ddd')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads',
    }),
  )
  uploadAnyFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('files', files);
  }

  @Post('eee')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage,
      dest: 'uploads',
    }),
  )
  uploadSpecifyPath(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
        exceptionFactory(err) {
          throw new HttpException('xxx' + err, 404);
        },
      }),
    )
    files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('files', files);
  }
}
