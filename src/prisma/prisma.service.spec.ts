import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('data should be defined', async () => {
    const data = await service.user.findFirst();
    expect(data).toBeDefined();
  });
});
