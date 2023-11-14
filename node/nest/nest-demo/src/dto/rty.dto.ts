import { IsInt } from 'class-validator';

export class RTY {
  name: string;
  @IsInt({
    // 可以拿到对象、属性名、属性值、class 名
    message({ targetName, property, value, constraints }) {
      return `${targetName} 类的 ${property} 属性的值 ${value} 不满足约束: ${constraints}`;
    },
  })
  age: number;
  sex: string;
  hobbis: Array<string>;
}
