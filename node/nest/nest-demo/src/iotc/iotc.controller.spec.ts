import { Test, TestingModule } from '@nestjs/testing';
import { IotcController } from './iotc.controller';
import { IotcService } from './iotc.service';

describe('IotcController', () => {
  let controller: IotcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IotcController],
      providers: [IotcService],
    }).compile();

    controller = module.get<IotcController>(IotcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
