import {
  BadRequestException,
  Controller,
  Get,
  Inject,
  Query,
  StreamableFile,
} from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { AppService } from './app.service';
import { RedisService } from './redis/redis.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(RedisService)
  private redisService: RedisService;

  @Get('addPos')
  async addPos(
    @Query('name') posName: string,
    @Query('longitude') longitude: number,
    @Query('latitude') latitude: number,
  ) {
    if (!posName || !longitude || !latitude) {
      throw new BadRequestException('位置信息不全');
    }

    try {
      await this.redisService.geoAdd('positions', posName, [
        longitude,
        latitude,
      ]);
    } catch (e) {
      throw new BadRequestException(e.message);
    }

    return {
      message: '添加成功',
      statusCode: 200,
    };
  }

  // 查询  positions 列表所有数据名称
  @Get('allPos')
  async allPos() {
    return this.redisService.geoList('positions');
  }

  @Get('pos')
  async pos(@Query('name') name: string) {
    return this.redisService.geoPos('positions', name);
  }

  @Get('nearbySearch')
  async nearbySearch(
    @Query('longitude') longitude: number,
    @Query('latitude') latitude: number,
    @Query('radius') radius: number,
  ) {
    if (!longitude || !latitude) {
      throw new BadRequestException('缺少位置信息');
    }
    if (!radius) {
      throw new BadRequestException('缺少搜索半径');
    }

    return this.redisService.geoSearch(
      'positions',
      [longitude, latitude],
      radius,
    );
  }

  @Get('file')
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    return new StreamableFile(file, {
      type: 'application/json',
      disposition: 'attachment;',
    });
  }

  @Get('file2')
  getFile2(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    return new StreamableFile(file, {
      type: 'application/json',
      disposition: 'inline',
    });
  }
}
