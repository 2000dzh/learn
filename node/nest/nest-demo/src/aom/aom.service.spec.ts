import { Test, TestingModule } from '@nestjs/testing';
import { AomService } from './aom.service';

describe('AomService', () => {
  let service: AomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AomService],
    }).compile();

    service = module.get<AomService>(AomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
