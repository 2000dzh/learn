import { Test, TestingModule } from '@nestjs/testing';
import { AomController } from './aom.controller';
import { AomService } from './aom.service';

describe('AomController', () => {
  let controller: AomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AomController],
      providers: [AomService],
    }).compile();

    controller = module.get<AomController>(AomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
