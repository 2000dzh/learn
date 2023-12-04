import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

class CreatePersonDto {
  // name: string;
  age: number;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // console.log(headers);
    console.log('access');
    return this.appService.getHello();
  }

  @Post('getData')
  body(@Body() createPersonDto: CreatePersonDto) {
    console.log(createPersonDto);
    return `received: ${JSON.stringify(createPersonDto)}`;
  }
}
