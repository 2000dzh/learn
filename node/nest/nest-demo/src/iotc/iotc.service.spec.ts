import { Test, TestingModule } from '@nestjs/testing';
import { IotcService } from './iotc.service';

describe('IotcService', () => {
  let service: IotcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IotcService],
    }).compile();

    service = module.get<IotcService>(IotcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
