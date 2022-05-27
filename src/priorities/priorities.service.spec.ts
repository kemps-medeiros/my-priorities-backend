import { Test, TestingModule } from '@nestjs/testing';
import { PrioritiesService } from './priorities.service';

describe('PrioritiesService', () => {
  let service: PrioritiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrioritiesService],
    }).compile();

    service = module.get<PrioritiesService>(PrioritiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
