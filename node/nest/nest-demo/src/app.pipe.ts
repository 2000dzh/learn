import {
  ArgumentMetadata,
  BadRequestException,
  Inject,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

// 自定义管道
@Injectable()
export class AppValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // value 是 query、param 的值
    // metadata 里包含 type、metatype、data：
    console.log(value, metadata);
    return value;
  }
}

@Injectable()
export class MyValidationPipe implements PipeTransform {
  @Inject('person1')
  private options;

  async transform(value: any, { metatype }: ArgumentMetadata) {
    console.log(this.options);
    if (!metatype) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const erros = await validate(object);
    if (erros.length) {
      throw new BadRequestException('参数验证失败');
    }
    return value;
  }
}
