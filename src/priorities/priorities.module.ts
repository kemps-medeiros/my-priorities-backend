import { Module } from '@nestjs/common';
import { PrioritiesService } from './priorities.service';
import { PrioritiesController } from './priorities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Priority } from './entities/priority.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Priority])],
  exports: [TypeOrmModule, PrioritiesService],
  controllers: [PrioritiesController],
  providers: [PrioritiesService]
})
export class PrioritiesModule {}
