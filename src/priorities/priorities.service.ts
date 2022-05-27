import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';
import { Priority } from './entities/priority.entity';

@Injectable()
export class PrioritiesService {
  constructor(
    @InjectRepository(Priority)
    private prioritiesRepository: Repository<Priority>
  ) { }


  async create(createPriorityDto: CreatePriorityDto) {
    const prioritie = this.prioritiesRepository.create(createPriorityDto);
    return await this.prioritiesRepository.save(prioritie);

  }

  async findAll() {
    return await this.prioritiesRepository.find();
  }

  async findOne(id: string) {
    return await this.prioritiesRepository.findOne(id);
  }

  async findOneOrFail(
    conditions: FindConditions<Priority>,
    options?: FindOneOptions<Priority>) {
    try {
      return await this.prioritiesRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }


  async update(id: string, updatePriorityDto: UpdatePriorityDto) {
    const prioritie = await this.findOneOrFail({ id });
    await this.prioritiesRepository.merge(prioritie, updatePriorityDto);
    return this.prioritiesRepository.save(prioritie);
  }

  async remove(id: string) {
    return await this.prioritiesRepository.delete(id);
  }


}
